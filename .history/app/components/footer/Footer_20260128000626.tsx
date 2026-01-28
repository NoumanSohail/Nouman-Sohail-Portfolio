import { footerdata } from "@/app/data";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-10 mt-20 xl:mt-30">
      <div
        className="flex w-full bg-transparent backdrop-blur-xs border-t border-white/30 
                      p-5 shadow-[0_-8px_20px_rgba(0,0,0,0.15)]"
      >
        {footerdata.map((footer, index) => (
          <div className="flex flex-col  text-center"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
