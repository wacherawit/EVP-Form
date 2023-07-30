import Navbar from "./Navbar"
import Footer from "./Footer"
import { useRouter } from "next/router";
export default function Layout({children})
{ 
const router = useRouter();
if (router.pathname === "/form")
{
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  ); 
}
    return(
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}