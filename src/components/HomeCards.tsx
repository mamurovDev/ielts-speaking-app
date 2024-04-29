import Image from "next/image";
import Link from "next/link";
interface HomeCards {
  title: string;
  imagePath: string;
  imageDescription: string;
  route: string;
}
export default function HomeCards({
  title,
  imagePath,
  imageDescription,
  route,
}: HomeCards) {
  return (
    <Link
      href={route}
      className="h-64 w-[32%] bg-main rounded-lg flex flex-col items-center justify-center "
    >
      <h2 className="text-2xl text-center">{title}</h2>
      <Image src={imagePath} alt={imageDescription} width={200} height={200} />
    </Link>
  );
}
