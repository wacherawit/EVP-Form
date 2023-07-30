import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
export default function Footer({ event }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Container>
        <footer>
        <div className="scrollBtn">
          <button onClick={() => scrollToTop()}>
            <Image src="/scrollTotop.svg" width={25} height={15} />
          </button>
        </div>
          <div className="fs-2 d-flex justify-content-center">
            Eventthai Limited
          </div>
          <div className="Foot_top">
            <div className="Map">
              <div>
                <iframe
                  className="m-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.8192594486172!2d100.54908858807741!3d13.909749086975218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2837dc0573d55%3A0x3d1daa76d6acae7d!2sEventpass%20(Thailand)!5e0!3m2!1sth!2sth!4v1689051509735!5m2!1sth!2sth"
                  width="550"
                  height="400"
                  styles="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div>
                  <h3>บริษัท อีเว้นท์ไทย จำกัด (สำนักงานใหญ่)</h3>
                  <h2>
                    47/337 อาคารไคตัค ชั้น 8 ถนนป๊อปปูล่า ตำบลบ้านใหม่
                    อำเภอปากเกร็ด จังหวัดนนทบุรี 11120
                  </h2>
                  <div className="Contact">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/mail.svg"
                        width={15}
                        height={15}
                        className="m-1"
                      />
                      <div>support@eventpass.co</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/phone.svg"
                        width={15}
                        height={15}
                        className="m-1"
                      />
                      <div>02-115-4050</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <iframe
                  className="m-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31005.26941218807!2d100.5119776954!3d13.739102945670542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3260ed84f1%3A0xf136e366d7ed18e1!2sWeWork%20Asia%20Centre!5e0!3m2!1sth!2sth!4v1689047245466!5m2!1sth!2sth"
                  width="550"
                  height="400"
                  styles="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div>
                  <h3>บริษัท อีเว้นท์ไทย จำกัด (สำนักงานใหญ่)</h3>
                  <h2>
                    173 อาคารเอเซียเซ็นเตอร์ ชั้น 28 ห้อง 117 ถนนสาทรใต้
                    ทุ่งมหาเมฆ สาทร กรุงเทพฯ 10120
                  </h2>
                  <div className="Contact">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/mail.svg"
                        width={15}
                        height={15}
                        className="m-1"
                      />
                      <div>support@eventpass.co</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/phone.svg"
                        width={15}
                        height={15}
                        className="m-1"
                      />
                      <div>062-828-3203</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Foot_bot">
            <div className="Foot_left">
              <div>
                <Image src="/Evp-Logo.svg" width={140} height={40} />
                <h3 className="mt-3">บริษัท อีเว้นท์ไทย จำกัด</h3>
                <h2>
                  47/313 อาคารไคตัค ชั้น 5 ถนนป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด
                  จ.นนทบุรี 11120
                </h2>
                <h2 className="text-red mt-4">
                  ติดตามโปรโมชั่นได้รวดเร็วกว่า
                  <br></br>
                  DOWNLOAD EVENTPASS APPLICATION
                </h2>
              </div>
              <div>
                <Link href="/">
                  <Image
                    alt="android download"
                    src="/android.png"
                    width={160}
                    height={50}
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt="ios download"
                    src="/ios.png"
                    width={160}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className="Foot_right">
              <div className="Menu_box">
                <h4 className="Head_menu">อีเว้นท์</h4>
                <div className="Menu_link">
                  <Link href="/">ออนไลน์อีเว้นท์</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">งานแสดงสินค้าและนิทรรศการ</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ธุรกิจและการลงทุน</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">งานสินค้าลดราคา</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บันเทิง</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ศิลปะและวัฒนธรรม</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ความรู้และการศึกษา</Link>
                </div>
              </div>
              <div className="Menu_box">
                <h4 className="Head_menu">โปรโมชัน</h4>
                <div className="Menu_link">
                  <Link href="/">อาหาร</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ช็อป</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ท่องเที่ยว</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">แฟชั่น</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ไอทีเครื่องใช้ไฟฟ้า</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บ้านและสวน</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บิวตี้ & เฮลตี้</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บันเทิง</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">การเงิน</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">การเดินทาง</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ทั่วไป</Link>
                </div>
              </div>
              <div className="Menu_box">
                <h4 className="Head_menu">ไลฟ์สไตล์</h4>
                <div className="Menu_link">
                  <Link href="/">บันเทิง</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ทิปส์</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บิวตี้แอนด์แฟชัน</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">สุขภาพ</Link>
                </div>
              </div>
              <div className="Menu_box">
                <h4 className="Head_menu">บทความ</h4>
                <div className="Menu_link">
                  <Link href="/">แนวโน้มธุรกิจ</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">รีวิวอีเว้นท์</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">เทคโนโลยีเทรนด์</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ชีวิตคนเมือง</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">การลงทุน</Link>
                </div>
              </div>
              <div className="Menu_box">
                <h4 className="Head_menu">กินเที่ยว</h4>
                <div className="Menu_link">
                  <Link href="/">เช็คอิน</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">วันเดย์ทริป</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">คาเฟ่</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ร้านอาหาร</Link>
                </div>
              </div>
              <div className="Menu_box"></div>
              <div className="Menu_box">
                <h4 className="Head_menu">อีเว้นท์พาส</h4>
                <div className="Menu_link">
                  <Link href="/">เกี่ยวกับเรา</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ติดต่อโฆษณา</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">ติดต่อเรา</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">บริการของเรา</Link>
                </div>
                <div className="Menu_link">
                  <Link href="/">Virtual Solution</Link>
                </div>
              </div>
              <div className="w-auto">
                <h4 className="Head_menu">ช่องทางการติดตาม</h4>
                <div className="d-flex">
                  <div className="Follow">
                    <Link href="/">
                      <Image src="/icon-Face.svg" width={25} height={25} />
                    </Link>
                  </div>
                  <div className="Follow">
                    <Link href="/">
                      <Image src="/icon-ig.svg" width={25} height={25} />
                    </Link>
                  </div>
                  <div className="Follow">
                    <Link href="/">
                      <Image src="/icon-tw.svg" width={25} height={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
