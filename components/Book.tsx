import { BookType, PhotoType } from '../types'
import placeholder from '../public/book-cover.png'
import { useState } from 'react'
import Image from 'next/image'

const getProfilePicture = (photos: PhotoType[]): string => {
	if (photos.length > 0) {
		return photos[0].uri
	} return placeholder.src
}

const Book = ({ author, title, date_published, isbn, photos, chapters }: BookType) => {
	const [expanded, setExpanded] = useState(false)
	return (
		<div key={`${author.name}+${isbn}`} className="relative flex flex-col items-center font-mono p-4">
			<button onClick={() => setExpanded(prevState => !prevState)} className="hover:bg-co-50">
				<Image className="rounded-3xl blur-xl" src={`${getProfilePicture(photos)}`} width="" height="" alt=""/>
			</button>
			{expanded && 
				<div className="text-left mt-1">
					<div className="font-serif text-xl font-bold">{title}</div>
					<div>by {author.name}</div>
					<div>published: {date_published}</div>
					<div>ISBN: {isbn}</div>
					{!!chapters.length ? 'chapters: ' : null}
					{chapters.map(chapter =>
					<div>
						<div>{chapter.title} ({chapter.ordering})</div>
					</div>)}
				</div>
			}			
		</div>
	)
}

export default Book