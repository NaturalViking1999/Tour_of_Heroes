export interface Hero{
    id: number;
    name: string;
}

export interface Books{
  set1: {
    data: [{
      id: number,
      title: string,
      description: string,
  }]
  },
  set2: {
    data: [{
      id: number,
      releaseDate: string,
      qtyRelease: string,
  }]
  }
}