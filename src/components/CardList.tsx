import { cardContent } from "./../constants/CardContent";
export const CardList = () => {
  return (
    <div className="flex flex-col gap-8">
      {cardContent.map((content) => (
        <div
          key={content.title}
          className="px-3 py-3 h-[250px] bg-white rounded-lg flex flex-col justify-end items-center"
        >
          <h4 className="text-very-dark-violet font-bold text-center mb-5 text-[18px]">
            {content.title}
          </h4>
          <p className="text-text text-[16px] text-center">{content.content}</p>
        </div>
      ))}
    </div>
  );
};
