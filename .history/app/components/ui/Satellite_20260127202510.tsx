import Image from "next/image";
import satellite from "@/public/images/satellite.png"

const Satellite = () => {
  return (
    <div className="satellite-wrapper">
      <Image
        src={satellite}
        alt="Satellite"
        width={250}
        height={250}
        priority={false}
      />
    </div>
  );
};

export default Satellite;
