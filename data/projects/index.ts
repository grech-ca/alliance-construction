import { readdirSync, readFileSync } from 'fs';
import path from 'path';

import imageType from 'image-type';
import { without, sortBy } from 'lodash';

export interface StaticProject {
  id: number;
  photos: string[];
  plans: string[];
  area: number;
  price: number;
}

const utilityPaths = ['.DS_Store', 'plan'];

const catalogProjectsPath = path.join(process.cwd(), 'data/projects/images/catalog');
const portfolioProjectsPath = path.join(process.cwd(), 'data/projects/images/portfolio');

type ProjectType = 'catalog' | 'portfolio';

const projectsPaths: Record<ProjectType, string> = {
  catalog: catalogProjectsPath,
  portfolio: portfolioProjectsPath,
};

interface CreateObjectUrl {
  (image: Buffer): string;
}

const createObjectUrl: CreateObjectUrl = image => {
  const buffer = Buffer.from(image);
  const base64 = buffer.toString('base64');

  const { mime } = imageType(buffer);

  const imageUrl = `data:${mime};base64,${base64}`;

  return imageUrl;
};

const getBase64Images = (imagesPath: string, type: ProjectType) => {
  const imagesPaths = without(sortBy(readdirSync(path.join(projectsPaths[type], imagesPath))), ...utilityPaths);

  const base64Images = imagesPaths.map(imagePath => {
    const image = readFileSync(path.join(projectsPaths[type], imagesPath, imagePath));

    return createObjectUrl(image);
  });

  return base64Images;
};

interface GetStaticProjects {
  (type?: 'catalog' | 'portfolio'): Promise<StaticProject[]>;
}

export const getStaticProjects: GetStaticProjects = async (type = 'catalog') => {
  const projectsDir = sortBy(without(readdirSync(projectsPaths[type]), ...utilityPaths));

  const projects: StaticProject[] = projectsDir.map((imagesPath, index) => {
    const photos = getBase64Images(imagesPath, type);

    const projectDirectory = path.join(projectsPaths[type], imagesPath);

    const hasPlans = readdirSync(projectDirectory).includes('plan');
    const plans = hasPlans ? getBase64Images(path.join(imagesPath, 'plan'), type) : [];

    return {
      id: index + 1,
      photos,
      plans,
      area: 0,
      price: 0,
    };
  });

  return await Promise.resolve(projects);
};

interface GetStaticProject {
  (id: string, type?: ProjectType): Promise<StaticProject>;
}

export const getStaticProject: GetStaticProject = async (id, type = 'catalog') => {
  const projectsDir = sortBy(without(readdirSync(projectsPaths[type]), ...utilityPaths));

  const imagesPath = projectsDir[Number(id) - 1];
  const photos = getBase64Images(imagesPath, type);

  const projectDirectory = path.join(projectsPaths[type], imagesPath);

  const hasPlans = readdirSync(projectDirectory).includes('plan');
  const plans = hasPlans ? getBase64Images(path.join(imagesPath, 'plan'), type) : [];

  const project = {
    id: Number(id),
    photos,
    plans,
    area: 0,
    price: 0,
  };

  return await Promise.resolve(project);
};
