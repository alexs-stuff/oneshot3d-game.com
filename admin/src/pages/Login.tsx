import LayoutNorm from "../layouts/LayoutNorm";

export default function Login() {
  return (
    <LayoutNorm customClassName="justify-center items-center">
      <div className="w-full h-dvh bg-primary/70 backdrop-blur-lg  xss:h-auto  xss:w-[92.5%] xls:w-lg rounded-4xl shadow-black/50 drop-shadow-2xl text-primary-text flex flex-col items-center justify-center p-4 text-center gap-6">
        <div className="flex justify-center items-top flex-col">
        <h1 className="">Login</h1>
        <span>Please authentificate to access <b>OneShot 3D Admin</b></span>
        </div>

        <div className="w-full flex flex-col justify-top items-center gap-4">
            <input className="w-full bg-black/25 rounded-xl px-4 h-12 outline-primary-outline outline-1 focus:outline-white focus:outline-1.5" required={true} type="text" placeholder="Username"/>
            <input className="w-full bg-black/25 rounded-xl px-4 h-12 outline-primary-outline outline-1 focus:outline-white focus:outline-1.5" required={true}  type="password" placeholder="Password"/>
        </div>
        <button className="bg-white text-black px-6 py-2 font-semibold text-[18px] rounded-xl transition-[127ms] hover:scale-110 hover:cursor-pointer">Log In</button>

      </div>
    </LayoutNorm>
  );
}
