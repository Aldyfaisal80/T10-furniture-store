import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import FooterBadge from "../elements/FooterBadge";

export default function Footer() {
  return (
    <div className="w-full px-24 py-7 bg-primary-brown">
      <footer className="flex justify-between">
        <FooterBadge>
          <FooterBadge.FooterTitle title={"Other Info"} />
          <FooterBadge.FooterDescription text={"Terms & Conditions"} />
          <FooterBadge.FooterDescription text={"Privacy Policy"} />
          <FooterBadge.FooterDescription text={"Licence"} />
        </FooterBadge>
        <FooterBadge>
          <FooterBadge.FooterTitle title={"Media"} />
          <FooterBadge.FooterDescription text={"Blogs"} />
          <FooterBadge.FooterDescription text={"Photo galery"} />
          <FooterBadge.FooterDescription text={"Lastest News"} />
        </FooterBadge>
        <FooterBadge>
          <FooterBadge.FooterTitle title={"Company"}/>
          <FooterBadge.FooterDescription text={"About Us"} />
          <FooterBadge.FooterDescription text={"Career"} />
          <FooterBadge.FooterDescription text={"Services"} />
        </FooterBadge>
        <FooterBadge>
          <FooterBadge.FooterTitle title={"Be Social"} />
          <FooterBadge.FooterDescription className={"flex items-center gap-2"} icon={<FaFacebookF />} text={"Facebook"}  />
          <FooterBadge.FooterDescription className={"flex items-center gap-2"} text={"Twitter"} icon={<FaTwitter />} />
          <FooterBadge.FooterDescription className={"flex items-center gap-2"} text={"Linkedin"} icon={<FaLinkedinIn />} />
        </FooterBadge>
      </footer>
      <div className="flex justify-center mt-10 text-[1.1rem] font-medium">
        <span>Copyright © 2022. All Rights Reserved</span>
      </div>
    </div>
  )
}
