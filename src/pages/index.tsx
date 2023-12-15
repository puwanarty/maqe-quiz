import Link from 'next/link'
import React from 'react'

const pageConfig = [
  {
    title: 'CSS Styling',
    link: '/css-styling',
  },
  {
    title: 'Template and Styling',
    link: '/template-and-styling',
  },
]

const Main = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {pageConfig.map((page) => (
        <Link
          key={page.link}
          href={page.link}
          className="flex w-1/3 justify-center rounded-md bg-blue-500 p-4 text-xl font-semibold tracking-wider text-white"
        >
          {page.title}
        </Link>
      ))}
    </div>
  )
}

export default Main
