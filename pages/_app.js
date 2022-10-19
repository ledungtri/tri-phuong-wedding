import '../styles/globals.css';
import Layout from '../components/layout';
import Airtable from "airtable";

function MyApp({ Component, pageProps }) {
  Airtable.configure({
    apiKey: 'keyWXLKwRGW1k5Zwp'
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
