import jwt from 'jsonwebtoken';

import handler from 'server/handler';

const refreshHandler = handler().post((req, res) => {
  const { refresh } = req.body;
  if (!refresh) return res.status(400).send('No refresh token provided');

  const isRefreshValid = jwt.verify(refresh, process.env.JWT_REFRESH_SECRET);

  if (!isRefreshValid) return res.status(400).send('Refresh token is invalid');

  const accessToken = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({}, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

  res.send({
    accessToken,
    refreshToken,
  });
});

export default refreshHandler;
