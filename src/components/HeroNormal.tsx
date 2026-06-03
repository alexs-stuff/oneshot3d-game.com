interface props {
    text: string,
}
export default function HeroNorm({text}: props) {
    return (
        <h1 className="text-3xl text-center sm:text-left w-full pb-2">
            {text}
        </h1>
    )
}