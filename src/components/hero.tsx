import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="FLEX">
        <div className="DES">
          <div className="GOV">
            Governor Sindh
            <br />
            Kamran Khan Tessori
          </div>
          <div className="CER">
            Certified Cloud
            <br />
            Appleid Generative Ai
            <br />
            Engineer(GenEng)
          </div>
          <div className="EAR">
            Earn upto $5000 / month
          </div>
          <div className="EAR">
            Now admissions are open in
          </div>
          <div className="HYD">Hyderabad</div>

          <div className="LAST">
            <button className="APL">
              Apply now
            </button>
            <div className="ACP">
              <div className="NUM">562,143</div>
              <p>Accepted applications</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="KAMRAN"
            src="/images/kamran.png"
            width={920}
            height={300}
            alt="human"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;