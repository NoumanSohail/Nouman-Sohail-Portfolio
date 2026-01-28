import Image from "next/image";
import satellite from "@/public/images/satellite.png"

const Satellite = () => {
  return (
    <div className="alien-ufo-wrapper">
      <Image
        src={satellite}
        alt="Alien UFO"
        width={220}
        height={220}
        priority={false}
      />
    </div>
  );
};

export default Satellite;
