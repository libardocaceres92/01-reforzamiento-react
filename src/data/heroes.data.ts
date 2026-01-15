type _OwnerType = 'DC' | 'Marvel';

export enum OwnerEnum {
  DC = 'DC',
  Marvel = 'Marvel',
}

export interface Hero {
  id: number;
  name: string;
  owner: OwnerEnum ;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 6,
    name: 'Wolverine',
    owner: OwnerEnum.DC,
  },
];