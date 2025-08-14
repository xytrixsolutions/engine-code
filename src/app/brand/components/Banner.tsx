import Container from "@/components/Container";
import Image from "next/image";
import { JSX } from "react";

const Banner = ({ hidden }: { hidden?: boolean }): JSX.Element => {
  return (
    <Container>
      <div
        className={`w-full h-56 md:h-96 relative drop-shadow-xl ${hidden && "hidden"}`}
      >
        <Image
          src={"/placeholder.svg?height=400&width=1280"}
          alt={"BMW N47D20A Engine"}
          fill
          className="object-cover rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
        />
      </div>
    </Container>
  );
};

export default Banner;
