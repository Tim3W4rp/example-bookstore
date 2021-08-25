export type ResponseType = {
	authors: AuthorType[]
}

export type AuthorType = {
	name: string,
	birthplace: string,
	date_of_birth: string,
	date_of_death: string,
	books: BookType[],
	photos: PhotoType[],
}

export type BookType = {
	title: string,
	date_published: string,
	isbn: number,
	author: AuthorType,
	chapters: ChapterType[],
	photos: PhotoType[]
}

export type ChapterType = {
	title: string,
	ordering: number
}

export type PhotoType = {
	title: string,
	uri: string
}