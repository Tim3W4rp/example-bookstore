import { AuthorType } from '../types'
import Author from './Author'

const AuthorsList = (authors: AuthorType[]) => {
	return (
		<div className="bg-yellow-100 md:order-first p-8">
			<div className="flex-grow font-mono font-bold text-3xl">Authors</div>
			<div className="grid grid-cols-1 xl:grid-cols-2">
				{Object.values(authors).map(author => <Author key={author.name} {...author} />)}
			</div>
		</div>
	)
}

export default AuthorsList