import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../scss/index.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";

//import 'bootstrap/dist/js/bootstrap';

 if (typeof window !== "undefined") {
  // require("bootstrap/dist/js/bootstrap");
    require("bootstrap/dist/js/bootstrap")
 }

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <Component {...pageProps} />
        <SrollTop />
      </Provider>
    </main>
  );
}
