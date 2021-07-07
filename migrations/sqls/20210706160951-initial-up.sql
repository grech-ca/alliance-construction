CREATE TABLE admins (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name CHAR(255) NOT NULL,
  email CHAR(255) NOT NULL,
  password CHAR(255) NOT NULL
);
CREATE TABLE files (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  data MEDIUMBLOB NOT NULL,
  type ENUM('document', 'image') NOT NULL
);
CREATE TABLE resources (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name CHAR(255) NOT NULL,
  image INTEGER NOT NULL
);
CREATE TABLE resource_advantages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  text CHAR(255) NOT NULL
);
CREATE TABLE layouts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  common_area INTEGER NOT NULL,
  build_area INTEGER NOT NULL,
  position INTEGER,
  description CHAR(255)
);
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  type ENUM('EXEMPLARY', 'INDIVIDUAL') NOT NULL,
  floors INTEGER NOT NULL,
  price INTEGER NOT NULL,
  build_price INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL
);
-- RELATIONS
CREATE TABLE projects_images_relation (
  id INTEGER NOT NULL,
  image INTEGER NOT NULL,
  project INTEGER NOT NULL,
  PRIMARY KEY (image, project)
);
CREATE TABLE projects_layouts_relation (
  id INTEGER NOT NULL,
  layout INTEGER NOT NULL,
  project INTEGER NOT NULL,
  PRIMARY KEY (layout, project)
);
CREATE TABLE projects_resources_relation (
  id INTEGER NOT NULL,
  resource INTEGER NOT NULL,
  project INTEGER NOT NULL,
  PRIMARY KEY (project, resource)
);
CREATE TABLE resources_advantages_relation (
  id INTEGER NOT NULL,
  resource INTEGER NOT NULL,
  advantage INTEGER NOT NULL,
  PRIMARY KEY (resource, advantage)
);