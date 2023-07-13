import Link from "next/link"
import Image from "next/image"
import Head from "next/head";

export default function Navbar()
{
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
    return (
      <>
        <Head>
          <link rel="icon" href="/icon-Head.png" />
        </Head>
        <nav>
          <div>
            <Image src="/Evp-Logo.svg" width={167} height={40} />
          </div>
        </nav>
        <div className="scrollBtn">
          <button onClick={() => scrollToTop()}>
            <Image src="/scrollTotop.svg" width={25} height={15} />
          </button>
        </div>
      </>
    );
}