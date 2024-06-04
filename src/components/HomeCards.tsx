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
      className="h-64 md:w-[32%] bg-main rounded-lg flex flex-col items-center justify-center sm:mt-2"
    >
      <h2 className="md:text-2xl text-center sm:text-xl max-w-[90%]">{title}</h2>
      <Image src={imagePath} alt={imageDescription} width={200} height={200} quality={100} placeholder="blur" blurDataURL={minImagePath} loading="lazy" className="sm:w-40 sm:h-40" />
    </Link>
  );
}
