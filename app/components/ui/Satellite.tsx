import Image from "next/image";
import satellite from "@/public/images/satellite.png"

const Satellite = () => {
  return (
    <div className="satellite-wrapper">
      <Image
        src={satellite}
        alt="Satellite"
        width={220}
        height={220}
        priority={false}
      />
    </div>
  );
};

export default Satellite;
