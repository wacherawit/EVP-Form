import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss'
import Layout from '@/component/Layout'
import { Container} from "react-bootstrap";



export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  )
}