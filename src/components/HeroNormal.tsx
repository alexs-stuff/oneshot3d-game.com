interface props {
  text: string;
}
export default function HeroNorm({ text }: props) {
  return (
    <h1 className="w-full pb-2 text-center text-3xl sm:text-left">{text}</h1>
  );
}
