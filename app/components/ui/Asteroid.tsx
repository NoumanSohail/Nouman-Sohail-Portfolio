import Image from "next/image";
import asteroid from "@/public/images/asteroid.png"

const Asteroid = () => {
  return (
    <div className="asteroid-wrapper">
      <Image
        src={asteroid}
        alt="Asteroid"
        width={250}
        height={250}
        priority={false}
      />
    </div>
  )
}

export default Asteroid
