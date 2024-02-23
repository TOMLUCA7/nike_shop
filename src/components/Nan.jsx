import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import UserButtonInfo from "./UserButton";

const Nan = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* display nike image */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        {/* display navigation categores */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal yexy-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* display hamburger icone by condetion */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        <UserButtonInfo />
      </nav>
    </header>
  );
};

export default Nan;
