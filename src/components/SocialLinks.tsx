import { cn } from "@/lib/utils";
import { ExternalLink, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/", icon: <Facebook /> },
    {
      name: "Twitter",
      link: "https://x.com/ArvasKaim38125",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kaimarvas/",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://kaimarvas.vercel.app",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link
            key={indx}
            target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            {itm.icon}
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
