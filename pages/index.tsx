import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AuthorsList, BookHero } from '../components'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ResponseType } from '../types'
import BooksGrid from '../components/BooksGrid'

const GET_AUTHORS = gql`
  query Authors {
    authors @jsonapi(path: "authors/?include=photos,books.chapters,books.photos") {
      name
      birthplace
      date_of_birth
      date_of_death
      photos {
        title
        uri
      }
      books {
        title
        date_published
        isbn
        author
        chapters {
          title
          ordering
        }
        photos {
          title
          uri
        }
      }
    }
  }
`;

const parseBooks = (response: ResponseType) => {
  return response.authors.flatMap(author => author.books.flat())
}

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS)
  const [response, setResponse] = useState<ResponseType>(data)
  const [isLoading, setLoading] = useState(loading)
  useEffect(() => {
    setLoading(loading)
    setResponse(data)
  }, [loading, data])
  return (
    <div className="h-full">
      <Head>
        <title>Example bookstore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading && response ?
        <main className="grid grid-cols-1 md:grid-cols-2 w-full">
          {loading ? <div className="loader w-full h-full" /> : <BookHero {...{ books: parseBooks(response) }} />}
          <AuthorsList {...response.authors} />
          <BooksGrid {...parseBooks(response)} />
        </main> : <div className="loader w-full h-full" />
      }
      
      <footer className="flex justify-center w-full border-t h-20 bottom-0">
        <a
          className="flex items-center justify-center"
          href="https://github.com/Tim3W4rp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Martin Jordán
          <div className="ml-2">
            <Image src="/github.png" alt="Github Logo" width={40} height={40} />
          </div>
        </a>
      </footer>
    </div>
  )
}

export default Home
