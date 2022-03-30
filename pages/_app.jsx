import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* NAVBAR */}
      <Component {...pageProps} />
      {/* FOOTER */}
    </Layout>
  );
}

export default MyApp
