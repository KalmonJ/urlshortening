import { Button } from "components/Button";

export const Header = () => {
  return (
    <nav
      className={`w-full h-[90px] px-6 animate-menu-in flex items-center justify-between`}
    >
      <div>
        <h2 className="text-2xl font-bold">Shortly</h2>
      </div>
      <ul className="hidden md:flex gap-7 items-center">
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
