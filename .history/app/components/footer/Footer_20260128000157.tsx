import { footerdata } from "@/app/data";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-10 mt-20 xl:mt-30">
      <div
        className="flex w-full bg-transparent backdrop-blur-xs border-t border-white/30 
                      py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.15)] text-center"
      >
        Hello
      </div>
    </footer>
  );
};

export default Footer;
