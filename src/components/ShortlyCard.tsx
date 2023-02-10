import { ApiResult } from "app/page";

export const ShortlyCard = ({ short_link, original_link }: ApiResult) => {
  return (
    <div className="w-[300px] md:w-screen md:max-w-[970px] justify-between rounded-lg p-4 bg-white flex items-center">
      <span className="text-[16px] text-ellipsis overflow-hidden w-[50%] whitespace-nowrap md:text-lg text-very-dark-violet">
        {original_link}
      </span>
      <span className="text-[16px] md:text-lg text-new-cyan">{short_link}</span>
    </div>
  );
};
