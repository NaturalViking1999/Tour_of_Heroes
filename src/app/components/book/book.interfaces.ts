export interface BooksInterface {
  set1: {
    data: [
      {
        id: number,
        title: string,
        description: string
    }
    ]
  },
  set2: {
    data: [
      {
        id: number,
        releaseDate: string,
        qtyRelease: string,
      }
    ]
  }
}

export interface BooksSet1 {
    id: number,
    title: string,
    description: string
}

export interface BooksSet2 {
  id: number,
  releaseDate: string,
  qtyRelease: string,
}


export interface Book {
  id: number,
  title: string,
  description: string
}