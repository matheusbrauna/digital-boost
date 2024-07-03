import Image from 'next/image'

type Props = {
  img: string
  name: string
  username: string
  body: string
}

export function TestimonialCard({ img, name, username, body }: Props) {
  return (
    <figure className="w-72 cursor-pointer rounded-xl border bg-card p-4">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="Imagem da pessoa que fez o depoimento"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}
