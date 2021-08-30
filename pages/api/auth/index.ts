import { hash, compare, genSalt } from 'bcrypt';
import jwt from 'jsonwebtoken';

import AdminConfig from 'server/models/adminConfig';

import handler from 'server/handler';

const authHandler = handler().post(async (req, res) => {
  const [passwordConfig] = await AdminConfig.findOrCreate({
    where: { key: 'password' },
    defaults: {
      key: 'password',
      value: await hash(process.env.DEFAULT_ADMIN_PASSWORD, await genSalt(10)),
    },
  });

  const passwordsMatch = await compare(req.body.password, passwordConfig.get('value'));

  if (!passwordsMatch) return res.status(400).send('Invalid password');

  const accessToken = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({}, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

  res.send({
    accessToken,
    refreshToken,
  });
});

export default authHandler;
