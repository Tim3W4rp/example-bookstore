import { BookType } from '../types'
import Book from './Book'

const BooksGrid = (books: BookType[]) => {
	return (
		<div className="col-span-2 p-8">
			<div className="font-mono font-bold text-3xl">Books</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">	
				{Object.values(books).map((book, i) => <Book key={`${book.isbn}${i}`} {...book} />)}
			</div>
		</div>
	)	
}

export default BooksGrid