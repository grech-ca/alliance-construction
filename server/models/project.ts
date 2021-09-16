import { DataTypes, ModelDefined } from 'sequelize';

import sequelize from 'server/sequelize';

import Image from 'server/models/image';
import Resource from 'server/models/resource';

import { ProjectType, Area } from 'types/shared';

export interface ProjectModel {
  id: number;
  type: ProjectType;
  floors: number;
  price: number;
  buildPrice: number;
  bedrooms: number;
  area: Area;
}

const Project: ModelDefined<ProjectModel, ProjectModel> = sequelize.define('Project', {
  type: {
    type: DataTypes.ENUM(...Object.values(ProjectType)),
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
  area: {
    type: DataTypes.ENUM(...Object.values(Area)),
    allowNull: false,
  },
});

Project.hasMany(Image, { as: 'images' });
Project.hasMany(Resource, { as: 'resources' });

export default Project;
