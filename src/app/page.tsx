"use client";

import { Button } from "components/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ShortlyCard } from "./../components/ShortlyCard";
import { ShortlyCardList } from "./../components/ShortlyCardList";
import { CardList } from "components/CardList";

gsap.registerPlugin(ScrollTrigger);

export interface HomeProps {
  setProgress: Dispatch<SetStateAction<number>>;
}

export interface ApiResult {
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export default function Home() {
  const elementRef = useRef<HTMLElement | null | undefined>();
  const [progress, setProgress] = useState(0);
  const [inputLink, setInputLink] = useState("");
  const [links, setLinks] = useState<ApiResult[]>([]);

  console.log(links);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    ScrollTrigger.observe({
      target: window,
      type: "scroll",
      onChangeY: (self) => {
        const currentScrollValue = self.scrollY();
        const percent = Math.round((currentScrollValue * 100) / 818);
        setProgress(percent);
      },
      preventDefault: true,
    });
  }, []);

  const handleSend = async () => {
    const request = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputLink}`
    );

    const response = await request.json();

    if (request.ok) {
      setLinks([...links, response.result as ApiResult]);
    }

    setInputLink("");
  };

  return (
    <main
      ref={(el) => (elementRef.current = el)}
      className="w-screen h-screen max-w-[1440px]"
    >
      <div className="h-[650px] lg:h-[600px] pb-40 lg:pb-0 relative overflow-x-hidden flex flex-col-reverse justify-start lg:justify-end">
        <div className="w-full lg:w-[40%] px-6 flex flex-col items-center lg:items-start animate-fade-in">
          <h1 className="text-[22px] lg:text-[64px] text-center lg:text-left text-very-dark-violet font-bold">
            More than just shorter links
          </h1>
          <p className="text-text text-[12px] lg:text-[18px] text-center lg:text-left font-medium w-[65%]">
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
          className="absolute animate-translate-in w-[400px] lg:w-[600px] top-0 right-[-100px]"
        />
      </div>
      <div className="bg-[#EFF1F5] justify-end flex-col flex items-center h-[180vh] lg:h-[100vh] relative">
        <div className="bg-bg-shorten flex-col lg:flex-row mb-8 absolute animate-tanslate-left-input top-[-70px] z-10 w-[70%] flex gap-5 justify-between rounded-md bg-cover p-11 bg-no-repeat bg-dark-violet">
          <input
            className="w-full px-5 font-medium h-16 rounded-md text-xl placeholder:text-lg"
            placeholder="Shorten a link here..."
            value={inputLink}
            onChange={(e) => {
              setInputLink(e.target.value);
            }}
          />
          <Button
            variant="block"
            onClick={handleSend}
            aditionClasses="whitespace-nowrap"
          >
            Shorten It!
          </Button>
        </div>

        <div className="h-[80%] md:h-[80%] lg:h-[90%] items-center flex flex-col p-8 w-full">
          <ShortlyCardList links={links} />
          <div className="mb-[68px]">
            <h3 className="text-very-dark-violet font-bold text-center text-[22px] mb-[18px]">
              Advanced statistics
            </h3>
            <p className="text-[12px] lg:text-[16px] text-center text-text">
              Track how your links are performing across the web with{" "}
              <br className="hidden lg:block" /> our advanced statistics
            </p>
          </div>
          <div className="h-full lg: justify-center flex item flex-col">
            <CardList />
          </div>
        </div>
      </div>
      <div className="bg-bg-boost-mobile bg-no-repeat gap-6 flex items-center justify-center flex-col bg-cover bg-dark-violet h-[350px] w-full">
        <h4 className="text-white font-bold text-[22px]">
          Boost your links today
        </h4>
        <Button variant="solid">Get Started</Button>
      </div>
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" className="bg" />
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="100"
          className="indicator"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100 - progress,
          }}
        />
      </svg> */}
    </main>
  );
}
