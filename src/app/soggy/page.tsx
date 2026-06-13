import Image from "next/image";

export default function SoggyCat() {
  return (
    <>
      <Image
        src="/assets/img/soggy.webp"
        alt="soggy cat"
        width={800}
        className="w-full"
        height={1280}
      />
    </>
  );
}
