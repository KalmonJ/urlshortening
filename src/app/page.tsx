import { Button } from "components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen max-w-[1440px] bg-blac">
      <div className="flex w-full relative overflow-hidden h-[600px] items-center justify-between">
        <div className="w-[40%] animate-fade-in">
          <h1 className="text-[64px] text-very-dark-violet font-bold">
            More than just shorter links
          </h1>
          <p className="text-text font-medium w-[65%]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button variant="solid" aditionClasses="mt-[32px]">
            Get Started
          </Button>
        </div>

        <Image
          src="/illustration-working.svg"
          alt="working"
          width={600}
          height={400}
          className="absolute right-[-30px] animate-translate-in bottom-16"
        />
      </div>
    </main>
  );
}
