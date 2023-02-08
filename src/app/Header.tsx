import { Button } from "components/Button";

export const Header = () => {
  return (
    <nav
      className={`w-full px-6 h-[90px] lg:px-0 flex items-center justify-between`}
    >
      <ul className="flex gap-7 items-center">
        <li>
          <h2 className="text-2xl font-bold">Shortly</h2>
        </li>
        <li className="font-normal text-text">Features</li>
        <li className="font-normal text-text">Pricing</li>
        <li className="font-normal text-text">Resources</li>
      </ul>
      <div className="flex gap-6 items-center">
        <Button variant="link">Login</Button>
        <Button variant="solid">Sign Up</Button>
      </div>
    </nav>
  );
};
