export interface IAddress {
  city: string;
  street: string;
}

export interface IProject {
  id: number;
  name: string;
  address: IAddress;
  src: string[];
  href: string;
}
