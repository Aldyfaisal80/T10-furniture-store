import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiBeachBag } from "react-icons/gi";
export default function Navbar() {
  return (
    <nav className="flex w-full justify-between items-center py-4 text-[1.8rem] text-font-color">
      <div>
        <h1 className="italic">Sofa Set</h1>
      </div>
      <div>
        <ul className="flex w-[600px] justify-between items-center">
          <li>
            <a className="w-[100px] hover:font-bold">Home</a>
          </li>
          <li>
            <a className="w-[100px] hover:font-bold">Reviews</a>
          </li>
          <li>
            <a className="w-[100px] hover:font-bold">Contact</a>
          </li>
          <li>
            <a className="w-[100px] hover:font-bold">About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <a>
          <HiMagnifyingGlass />
        </a>
        <a>
          <GiBeachBag />
        </a>
      </div>
    </nav>
  )
}
