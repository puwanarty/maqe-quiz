import { IAuthor, IPost } from '@/types'
import cx from 'classnames'

interface postsWithAuthor extends IPost {
  author?: IAuthor
  formattedDate: string
}
interface Props {
  post: postsWithAuthor
  idx: number
}

const Post: React.FC<Props> = ({ post, idx }) => {
  return (
    <div
      className={cx(
        'flex flex-col divide-y divide-gray-300 shadow-md',
        idx % 2 === 0 ? 'bg-white' : 'bg-[#CCECFF]'
      )}
    >
      <div className="flex items-center gap-1 px-4 py-2">
        <img
          className="h-8 w-8 rounded-full"
          src={post.author?.avatar_url}
          alt={`avatar-${post.author_id}`}
        />
        <span className="font-semibold text-[#F6592C]">
          {post.author?.name}
        </span>
        <span className="text-gray-500">{`posted on ${post.formattedDate}`}</span>
      </div>
      <div className="flex gap-2 p-4">
        <div className="relative w-1/3">
          <img
            className="w-full object-cover"
            src={post.image_url}
            alt={post.title}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-xl font-bold">{post.title}</p>
          <p className="text-lg">{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
