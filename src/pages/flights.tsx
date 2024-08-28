import dynamic from "next/dynamic";
import Header from "../components/header/header";
import Footer from "../components/footer";
import Heroflight from "../components/hero/Heroflight";
import Link from "next/link";
import Flights from "../components/common/Flights";
import Faq from "../components/common/Faq";
import WhyChoose from "../components/utility/WhyChoose";
import TopDestinations from "../components/common/TopDestinations";
import CallToActions from "../components/utility/CallToActions";

const flight = () => {
    return (
      <>
     <Header  />
     {/* <Seo pageTitle="Home-8" /> */}

     <Heroflight />

     
     <section className="layout-pt-sm10 layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">Why Choose Us</h2>
              <p className="mt-5">
                These popular destinations have a lot to offer
              </p>
              <p className="text-dark-1 mt-40 sm:mt-20">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a
                  href="#"
                  className="button -md -blue-1 bg-yellow-1 text-dark-1"
                >
                  Learn More <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
       

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-60">
                <WhyChoose />
              </div>
            </div>

          </div>
   
        </div>
     
      </section>
    
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Flights</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
           

            <div className="col-auto">
              <Link
                href="/flight/flight-list-v1"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
           
          </div>
          

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
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
  export default dynamic(() => Promise.resolve(flight), { ssr: false });