import dynamic from "next/dynamic";
import Header from "../components/header/header";
import Footer from "../components/footer";
import HeroBus from "../components/hero/herobus";
import Link from "next/link";
import Cars from "../components/cars/Cars";
import Faq from "../components/common/Faq";
import TopDestinations from "../components/common/TopDestinations";
import CallToActions from "../components/utility/CallToActions";

const Bus = () => {
    return (
      <>
     <Header />
     {/* <Seo pageTitle="Home-8" /> */}

     <HeroBus />

     <div className="header-margin"></div>
    
     <section className="">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Book A Bus</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
   
            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
           
          </div>
          
          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars />
          </div>
         
        </div>
        
      </section>

      <section className="layout-pt-sm10 layout-pb-sm10">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations in Andaman</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          

          <div className="row y-gap-30 pt-40">
            <TopDestinations />
          </div>
     
        </div>

      </section>
      
      <section className="layout-pt-sm10 layout-pb-sm10">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
         

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
         
        </div>
     
      </section>

      <CallToActions />
      <Footer />
      </>
    )
}
  export default dynamic(() => Promise.resolve(Bus), { ssr: false });