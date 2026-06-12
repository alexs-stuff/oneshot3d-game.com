import Image from "next/image";

export default function Logo({
  size = "large",
  scale = 1,
}: {
  size?: "small" | "large";
  scale?: number;
}) {
  const sizeX = size == "large" ? 1156 : 2048;
  const sizeY = size == "large" ? 324 : 2048;
  return (
    <Image
      src={
        size == "large"
          ? "/assets/img/os3d/iconFULL.png"
          : "/assets/img/os3d/icon2048.png"
      }
      alt="OneShot 3D"
      width={sizeX * scale}
      height={sizeY * scale}
      loading="eager"
    />
  );
}
