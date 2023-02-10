import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ApiResult } from "app/page";
import { ShortlyCard } from "./ShortlyCard";

type ShortlyCardListProps = {
  links: ApiResult[];
};

export const ShortlyCardList = ({ links }: ShortlyCardListProps) => {
  return (
    <div className="mb-6 flex flex-col gap-4">
      {links.map((link) => (
        <ShortlyCard key={link.short_link2} {...link} />
      ))}
    </div>
  );
};
