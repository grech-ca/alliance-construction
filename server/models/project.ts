import { Model, DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('EXEMPLARY', 'INDIVIDUAL'),
      allowNull: false,
    },
    floors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buildPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize },
);

void Project.sync();
