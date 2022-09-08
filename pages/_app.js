import Header from "../components/core/header/Header";
import BonusCard from "../components/entities/bonus/BonusCard";
import Slider from "../components/core/slider/Slider";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Header />
    <Slider />
  </>
);

export default MyApp;
