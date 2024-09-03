import Image from "next/image";

const AnimeList = ({title, images, id}) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images} 
        alt="Placeholder Image"
        width={350}
        height={350}
      />
      <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
    </Link>
  )
}

export default AnimeList