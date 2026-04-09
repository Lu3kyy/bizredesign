import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url('/assets/juicy-burger-hero.png')] min-w-screen min-h-screen bg-center bg-no-repeat">
      <div className="flex justify-end flex-col items-center ">
        <h1 className="text-4xl font-bold">JUICY BURGER</h1>
        <p>THE JUICE IS LOOSE</p>
      </div>
      </div>
    </div>
  );
}
