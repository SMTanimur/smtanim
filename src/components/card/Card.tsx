import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  path: string;
  slug: string;
  image: string;
  description: string;
}

const Card = ({ image, path, slug, title, description }: CardProps) => {
  return (
    <div className="overflow-hidden border border-gray-600 rounded-xl bg-linearCard">
      <Link href={path}
      className="overflow-hidden rounded-xl"
      >
          <Image
            alt={slug}
            width={600}
            height={350}
            src={image}
            className="object-cover object-top transition-all duration-300 hover:scale-105"
          />
      </Link>
      <div className="p-4 pt-3">
        <Link href={path}
         className="text-lg font-bold text-green82"
        >
          {title}
        </Link>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
