import { useEffect, useState } from 'react'
import { getRandomItemFromArray } from '../src/utils';
import { BookType, PhotoType } from '../types'
import placeholder from '../public/book-cover.png'
import Image from 'next/image'

const SECOND = 1000

type Props = {
	books: BookType[]
}

const getBooksWithPhotos = (books: BookType[] | undefined): BookType[] => {
	if (books) {
		return books.filter(book => {
			return book.photos.length
		})
	} else return []
}

const getRandomBookWithPhotos = (books: BookType[]): BookType => {
	return getRandomItemFromArray(getBooksWithPhotos(books))
}

const getRandomPhoto = (photos: PhotoType[]): string => {
	return (getRandomItemFromArray(photos) as PhotoType).uri
}

const BookHero = (props: Props) => {
	const { books } = props
	const [randomBook, setRandomBook] = useState<BookType>()

	useEffect(() => {
		if (books) {
			const timer = setTimeout(() => {
				const book = getRandomBookWithPhotos(books)
				setRandomBook(() => ({...book}))
			}, SECOND * 5)
			return () => clearTimeout(timer)
		}
	}, [randomBook])

	return (
		<div className="flex flex-wrap items-center col-span-2 md:col-span-1 justify-around sm:w-full lg:w-full md:w-full bg-yellow-200">
			<div className="flex flex-col">
				{randomBook && <Image className="md:p-0 md:w-full" src={`${getRandomPhoto(randomBook.photos)}`} width="400" height="300" />}
				<div className="flex flex-col justify-right text-right p-4">
					<div className="font-serif font-bold text-3xl">{randomBook?.title}</div>
					<div className="font-mono">by {randomBook?.author.name}</div>
					<div className="font-mono">Published: {randomBook?.date_published}</div>
					<div className="font-mono text-gray-500">ISBN: {randomBook?.isbn}</div>
				</div>
			</div>
		</div>
	)
}

export default BookHero