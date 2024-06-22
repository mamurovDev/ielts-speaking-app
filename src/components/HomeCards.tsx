import Image from "next/image";
import Link from "next/link";
interface HomeCards {
  title: string;
  imagePath: string;
  imageDescription: string;
  route: string;
  minImagePath: string;
}
export default function HomeCards({
  title,
  imagePath,
  minImagePath,
  imageDescription,
  route,
}: HomeCards) {
  return (
    <Link
      href={route}
      className="md:h-64 md:w-[23%] sm:mt-2 sm:h-24 bg-main rounded-lg flex flex-row-reverse md:flex-col items-center sm:justify-end  md:justify-center"
    >
      <h2 className="md:text-2xl md:text-center sm:text-xl max-w-[90%]">{title}</h2>
      <Image src={imagePath} alt={imageDescription} width={200} height={200} quality={100} placeholder="blur" blurDataURL={minImagePath} loading="lazy" className="sm:w-24 sm:h-24 sm:mx-2 md:m-0 md:h-40 md:w-40" />
    </Link>
  );
}
