import Image from 'next/image'

export const metadata = {
  title: 'Loading Page',
  description: 'Loading screen for our awesome app',
}

const Loading = () => {
  return (
    <div className="fixed  inset-0 flex items-center justify-center z-50 bg-foreground">
      <div className="logo-pulse">
        <Image
          src="/logo.png"
          alt="Logo"
          width={96}
          height={96}
          className="h-24 w-24"
        />
      </div>
    </div>
  )
}

export default Loading
