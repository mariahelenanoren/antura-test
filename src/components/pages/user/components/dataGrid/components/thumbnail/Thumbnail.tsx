import Image from 'next/image';

interface IThumbnail {
  src: string;
}

export const Thumbnail = ({ src }: IThumbnail) => {
  return <Image src={src} width={120} height={120} alt="user-thumbnail" />;
};
