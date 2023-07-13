import Head from "next/head";
import Image from "next/image";
import { Inter, Train_One } from "next/font/google";
import { Container , Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3001/Event/");
  const data = await res.data;
  return {
    props: {
      events: data,
    },
  };
}
export default function Home({ events }) {
  const [event, setevent] = useState(events);
  return (
    <>
      <Head>
        <title>EventPass</title>
      </Head>
      <div className="Image_banner">
        <Image src="/BG.png" width={1440} height={424} />
        <Image
          className="Image_home"
          src="/Img.png"
          width={1116}
          height={424}
        />
      </div>
      <Container>
        <div className="Home_Header">
          <h1 className="fw-bold ">EVENTPASS CAREERS</h1>
          <h2 className="test">ร่วมงานกับเรา</h2>
        </div>
        <div className="Applybox">
          <Table className="w-100">
            <thead>
              <tr>
                <th className="fs-2 fw-medium">ตำแหน่งที่เปิดรับ</th>
                <th>  </th>
                <th className="Applycount" >ทั้งหมด {event.length} ตำแหน่ง</th>
              </tr>
            </thead>
            <tbody>
              {event.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h3 className="fs-3 fw-normal">{item.name}</h3>
                  </td>
                  <td>
                    <h3 className="WorkType">{item.type}</h3>
                  </td>
                  <td>
                    <Link href={"/about/" + item.id}>
                      สมัครเลย
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
