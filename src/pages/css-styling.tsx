import cx from 'classnames'

const StylingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center p-20">
      <div className="relative flex w-full items-center justify-center">
        <div className="shadow-logo absolute left-1/2 top-1/2 h-10 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#3A4454]"></div>
        <div className="absolute left-4 right-0 top-1/2 grid -translate-y-1/2 transform grid-cols-5 place-items-center gap-4">
          {['M', 'A', 'Q', 'E'].map((item) => (
            <div
              key={item}
              className="shadow-logo aspect-square w-full rounded-full bg-gradient-to-b from-[#6BC4E7] to-[#9AD3D1] p-4"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-transparent ring-8 ring-white">
                <p
                  className={cx(
                    'text-8xl font-bold text-white',
                    item === 'Q' && 'rotate-225 transform'
                  )}
                  // use inline style because tailwind doesn't support text-shadow without a plugin
                  style={{
                    textShadow: '0 0 0.5rem rgba(0,0,0,0.8)',
                  }}
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StylingPage
