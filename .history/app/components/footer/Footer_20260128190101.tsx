import { footerdata } from "@/app/utils/data";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-20 xl:mt-30">
      <div
        className="flex items-center justify-center w-full bg-transparent backdrop-blur-xs border-t border-white/30 
                      p-5 shadow-[0_-8px_20px_rgba(0,0,0,0.15)]"
      >
        {footerdata.map((footer, index) => (
          <div key={index} className="flex">
            <ul className="flex flex-col text-center text-gray-400 gap-2">
              <li>{footer.title}</li>
              <li>{footer.content}</li>
              <li>{footer.built}</li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
