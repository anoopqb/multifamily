import Footer from '../components/layout/footer/footer';
import Header from '../components/layout/header/header';
import Layout from '../components/layout/layout';
import '../styles/base.scss';
import '../styles/normalize.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </Layout>
  );
}

export default MyApp;
