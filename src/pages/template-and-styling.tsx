import Post from '@/components/Post'
import API_PATHS from '@/constants/apiPaths'
import { IAuthor, IPost } from '@/types'
import useAxios from 'axios-hooks'
import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

// tz plugin depends on utc plugin
// ref: https://github.com/iamkun/dayjs/issues/1584#issuecomment-895110206
dayjs.extend(tz)
dayjs.extend(utc)

const ReactPage: React.FC = () => {
  const timezone = dayjs.tz.guess()

  const [{ data: authors, loading: authorsLoading, error: authorsError }] =
    useAxios<IAuthor[]>(API_PATHS.AUTHORS)

  const [{ data: posts, loading: postsLoading, error: postsError }] = useAxios<
    IPost[]
  >(API_PATHS.POSTS)

  if (authorsLoading || postsLoading) {
    return <p>Loading...</p>
  }

  if (authorsError || postsError) {
    return <p>Error</p>
  }

  if (!posts || !authors) {
    return <p>No data</p>
  }

  const authorMap = new Map<number, IAuthor>()
  authors.forEach((author) => authorMap.set(author.id, author))

  const postsWithAuthor = posts.map((post) => ({
    ...post,
    author: authorMap.get(post.author_id),
    formattedDate: dayjs(post.created_at)
      .tz(timezone)
      .format('dddd, MMMM, D, YYYY, HH:mm'),
  }))

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 py-4">
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <p className="text-4xl font-bold">MAQE Forums</p>
        <div className="flex flex-col gap-4">
          <p>{`Your current timezone is: ${timezone}`}</p>
          <div className="flex flex-col gap-4">
            {postsWithAuthor.map((post, idx) => (
              <Post key={post.id} post={post} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactPage
