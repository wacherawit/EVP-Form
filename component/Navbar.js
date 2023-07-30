import Link from "next/link"
import Image from "next/image"
import Head from "next/head";

export default function Navbar()
{
    return (
      <>
        <Head>
          <link rel="icon" href="/icon-Head.png" />
        </Head>
        <nav>
          <div>
            <Image src="/Evp-Logo.svg" alt="Eventpass Icon" width={167} height={40} />
          </div>
        </nav>
        
      </>
    );
}