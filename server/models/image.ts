import { DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

const Image = sequelize.define('Image', {
  data: DataTypes.BLOB,
});

export default Image;
