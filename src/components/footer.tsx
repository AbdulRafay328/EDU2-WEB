import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h1 className="footer-title">Core Courses</h1>
          <ul className="footer-list">
            <li>Programming Fundamentals</li>
            <li>Web2 Using Nextjs</li>
            <li>Earn as you learn</li>
          </ul>
        </div>

        <div className="footer-section">
          <h1 className="footer-title">Advanced Courses</h1>
          <ul className="footer-list">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence and Deep Learning</li>
            <li>Ambient Computing IoT</li>
            <li>Genomics Bioinformatics</li>
            <li>Network programmability and automation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h1 className="footer-title">Social Links</h1>
          <div className="social-icons">
            <Image src="/images/fb.png" alt="fb" width={30} height={30} />
            <Image src="/images/yt.png" alt="yt" width={30} height={30} />
            <Image src="/images/tw.png" alt="tw" width={30} height={30} />
            <Image src="/images/ig.png" alt="ig" width={30} height={30} />
            <Image src="/images/tt.png" alt="tt" width={30} height={30} />
          </div>

          <div className="contact-info">
            <Image
              className="contact-icon"
              src="/images/ev.png"
              alt="ev"
              width={20}
              height={20}
            />
            <div className="contact-text">education@governorsindh.com</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
