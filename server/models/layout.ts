import { DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

const Layout = sequelize.define('Layout', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  //   allowNull: false,
  // },
  commonArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  buildArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.CHAR,
  },
});

export default Layout;
