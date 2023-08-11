import { Image } from "@components/image";
import { WrapLink } from "@components/link";


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
      <WrapLink href={path} className="overflow-hidden rounded-xl">
        <Image
          alt={slug}
          width={600}
          height={350}
          src={image}
          className="object-cover object-top h-[220px] transition-all duration-300 hover:scale-105"
        />
      </WrapLink>
      <div className="p-4 pt-3">
        <WrapLink href={path} className="text-lg font-bold line-clamp-2 text-green82">
          {title}
        </WrapLink>
        <p className="mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;