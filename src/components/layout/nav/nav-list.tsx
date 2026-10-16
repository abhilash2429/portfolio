import { navData } from "./_nav-mock";
import NavItem from "./nav-item";

const NavList = () => (
  <ul role="list" className="flex items-center gap-[18px] sm:gap-[26px]">
    {navData.map((nav) => (
      <NavItem key={nav.id} {...nav} />
    ))}
  </ul>
);

export default NavList;
