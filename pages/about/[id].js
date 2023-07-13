import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { Container } from "react-bootstrap";

export async function getServerSideProps({ params }) {
  const RelatedJob = await axios.get("http://localhost:3001/Event/");
  const RelatedData = await RelatedJob.data;

  const id = params.id;
  const res = await axios.get("http://localhost:3001/Event/" + id);
  const data = await res.data;

  const RelateJobs = RelatedData.filter(
    (RelatedData) => RelatedData.id !== data.id
  ).slice(0, 3);
  return {
    props: {
      Works: data,
      Related: RelateJobs,
    },
  };
}
export default function WorkDetaail({ Works, Related }) {
  console.log(Works.qualifi);
  return (
    <>
      <Head>
        <title> {Works.name} </title>
      </Head>
      <Container>
        <section className="Home_Header">
          <h1 className="fw-bold">EVENTPASS CAREERS</h1>
          <h2>ร่วมงานกับเรา</h2>
        </section>
        <section className="Detail">
          <div className="Detail_box">
            <div className="Duty">
              <div className="Detail_Head">
                <h2>{Works.name}</h2>
                <Link href="/form" className="applyBtn">
                  ส่งใบสมัคร
                </Link>
              </div>
              <div className="Detail_Body">
                <div className="Detail_Type">{Works.type}</div>
                <div className="fs-5">หน้าที่และความรับผิดชอบ</div>
                <ul>
                  {Works.duty.map((item) => (
                    <li className="fw-light" key={item.dutyId}>
                      {item.Detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="fs-5">คุณสมบัติ</div>
                <ul>
                  {Works.qualifi.map((qualifi) => (
                    <li className="fw-light" key={qualifi.qlfId}>
                      {qualifi.qlf_detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="Benefits">
              <h3>Benefits</h3>
              <ul>
                {Works.benefits.map((benefit) => (
                  <li className="fw-light" key={benefit.beneId}>
                    {benefit.benefit_detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link href="/form" className="applyBtn">
              ส่งใบสมัคร
            </Link>
          </div>
        </section>
        <section className="OtherJob">
          <h2>Related Job Opening</h2>
          <div>
            <ul>
              {Related.map((otherJob) => (
                <Link href={"/about/" + otherJob.id} key={otherJob.id}>
                  <div className="otherJob_detail">
                    <h4>{otherJob.name}</h4>
                    <div>
                      <div>{otherJob.type}</div>
                      <div>
                        {otherJob.qualifi.map((JobQlf) => (
                          <li key={JobQlf.qlfId}>{JobQlf.qlf_detail}</li>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
