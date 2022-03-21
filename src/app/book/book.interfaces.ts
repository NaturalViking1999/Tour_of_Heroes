export interface BooksInterface {
  set1?: {
    data: BooksSet1[]
  },
  set2?: {
    data: BooksSet2[]
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

// export interface Books extends BooksSet1, BooksSet2{
// [index: number]:
//   {
//     id: number,
//     title?: string,
//     description?: string,
//     releaseDate?: string,
//     qtyRelease?: string,
//   }
// }