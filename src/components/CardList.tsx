import { cardContent } from "./../constants/CardContent";
import Image from "next/image";

export const CardList = () => {
  return (
    <div className="flex lg:flex-row cardList w-full flex-col gap-28">
      {cardContent.map((content, index) => (
        <div
          key={content.title}
          className={`px-3 py-3 h-[250px] ${
            index === 1
              ? "lg:mt-[32px]"
              : index === 2
              ? "lg:mt-[68px]"
              : "lg:mt-0"
          } relative after:hidden bg-white last-of-type:after:hidden lg:after:block after:content-[''] after:top-[50%] after:right-[-120px] after:absolute after:h-4 after:w-[120px] after:bg-new-cyan rounded-lg flex flex-col justify-end items-center`}
        >
          <div className="h-[70px] lg:before:hidden flex items-center justify-center custom before:content-[''] before:absolute before:top-[-80px] before:right-[50%] before:translate-x-[50%] before:h-[80px] before:w-[12px] before:bg-new-cyan  w-[70px] rounded-full top-[-30px] bg-dark-violet absolute">
            <Image
              src={content.icon}
              height={30}
              width={30}
              alt={content.title}
            />
          </div>
          <h4 className="text-very-dark-violet font-bold text-center mb-5 text-[18px]">
            {content.title}
          </h4>
          <p className="text-text text-[16px] text-center">{content.content}</p>
        </div>
      ))}
    </div>
  );
};
