import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiBeachBag } from "react-icons/gi";
import Navlink from "../elements/NavLink";
import NavIcon from "../elements/NavIcon";
export default function Navbar() {
  return (
    <nav className="flex w-full justify-between items-center py-4 text-[1.8rem] text-font-color">
      <div>
        <h1 className="italic">Sofa Set</h1>
      </div>
      <div>
        <ul className="flex w-[600px] justify-between items-center">
          <li>
            <Navlink text="Home" className={"w-[100px]"} />
          </li>
          <li>
            <Navlink text="Shop" className={"w-[100px]"} />
          </li>
          <li>
            <Navlink text="Contact" className={"w-[100px]"} />
          </li>
          <li>
            <Navlink text="About Us" className={"w-[100px]"} />
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <NavIcon icon={<HiMagnifyingGlass />} />
        <NavIcon icon={<GiBeachBag />} />
      </div>
    </nav>
  )
}
