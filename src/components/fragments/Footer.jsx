import { FaFacebookF, FaTwitter , FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full px-24 py-7 bg-primary-brown">
        <footer className="flex justify-between ">
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-font-color text-[2rem]">Other Info</li>
              <li className="text-[1.1rem] font-medium">Terms & Conditions</li>
              <li className="text-[1.1rem] font-medium">Privacy Policy</li>
              <li className="text-[1.1rem] font-medium">Licence</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-font-color text-[2rem]">Media</li>
              <li className="text-[1.1rem] font-medium">Blogs</li>
              <li className="text-[1.1rem] font-medium">Photo galery</li>
              <li className="text-[1.1rem] font-medium">Lastest News</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-font-color text-[2rem]">Company</li>
              <li className="text-[1.1rem] font-medium">About us</li>
              <li className="text-[1.1rem] font-medium">Careers</li>
              <li className="text-[1.1rem] font-medium">Services</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-font-color text-[2rem]">Be social</li>
              <li className="text-[1.1rem] font-medium flex items-center gap-2"><FaFacebookF />Facebook</li>
              <li className="text-[1.1rem] font-medium flex items-center gap-2"><FaTwitter />Twitter</li>
              <li className="text-[1.1rem] font-medium flex items-center gap-2"><FaLinkedinIn />Linkedin</li>
            </ul>
          </div>
        </footer>
        <div className="flex justify-center mt-10 text-[1.1rem] font-medium">
        <span>Copyright © 2022. All Rights Reserved</span>
        </div>
    </div>
  )
}
