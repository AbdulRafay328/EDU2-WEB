import Image from "next/image";

interface type {
  img: string;
  heading: string;
}

function Card({ img, heading }: type) {
  return (
    <>
      <div className="FIRST">
        <div>
          <Image src={img} alt="progfund" width={350} height={100} />
        </div>

        <div className="HEAD">
          {heading}
        </div>
      </div>
    </>
  );
}

export default Card;