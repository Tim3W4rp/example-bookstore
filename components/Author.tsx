import { AuthorType, PhotoType } from '../types'
import placeholder from '../public/profile-placeholder.png'
import { useState } from 'react'
import Image from 'next/image'

const getProfilePicture = (photos: PhotoType[]): string => {
	if (photos.length > 0) {
		return photos[0].uri
	} return placeholder.src
}

const Author = ({ name, birthplace, date_of_birth, date_of_death, photos }: AuthorType) => {
	const [expanded, setExpanded] = useState(false)
	return (
		<div className="font-mono flex flex-col">
			<button onClick={() => setExpanded(prevState => !prevState)} className="flex flex-row items-center justify-start m-2 hover:bg-yellow-200 active:bg-yellow-300 p-2">
				<Image className="rounded-full" src={`${getProfilePicture(photos)}`} width="60" height="60"/>
				<div className="flex items-center font-mono ml-5">{name}</div>
			</button>
			{expanded &&
				<div className="flex flex-col text-right pr-6">
					<div>birthplace: {`${birthplace}`}</div>
					<div>born: {`${date_of_birth}`}</div>
					<div>died: {`${date_of_death}`}</div>
				</div>
			}
		</div>
	)
}

export default Author