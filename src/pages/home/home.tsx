import dynamic from "next/dynamic";
// import Blog4 from "../../components/blog/Blog4";
 import Brand from "../../components/brand/Brand";
// import Seo from "../../components/common/Seo";
 import Footer from "../../components/footer";
 import Header from "../../components/header/header";
 import Hero from "../../components/hero";
 import Link from "next/link";
 import Tours from "../../components/tours/Tours";
 import Cars from "../../components/cars/Cars";
 import BlockGuide from "../../components/block/BlockGuide";
 import CallToActions from "../../components/utility/CallToActions";
 import WhyChoose from "../../components/utility/WhyChoose";
 import AboutIntro from "../../components/utility/AboutIntro";
 import Cruise from "../../components/cruise/Cruise";
 import Testimonial from "../../components/testimonial/Testimonial";
 import TestimonialRating from "../../components/testimonial/TestimonialRating";
// import Travellers from "../../components/home/home-2/Travellers";
// import FilterHotelsTabs from "../../components/hotels/filter-tabs/FilterHotelsTabs";
// import FilterHotels from "../../components/hotels/FilterHotels";

const home = () => {
  return (
    <>
    
      {/* <Seo pageTitle="Home-2" />*/}
     

      <Header />


     <Hero />  

     <AboutIntro />

    

    

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


      <section className="">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
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
            <Cruise />
          </div>
     
        </div>
        
      </section>

      
     
      <section className="layout-pt-sm10 layout-pb-sm10">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
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
            <Tours />
          </div>
        
        </div>
      
      </section>

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
  

       <section className="layout-pt-sm10 layout-pb-sm10 bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
           

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            
          </div>
          

         
        </div>

      </section>

        <section className="layout-pt-sm10 layout-pb-sm10 bg-white">
        <div className="container">
       
        <div className="row y-gap-20 justify-between items-end">
           
             <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title"> Trusted by the world’s best</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Trusted by the world’s best
                </p>
              </div>
            </div>
          </div>


          <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-10 lg:pt-10">
               <Brand /> 
            </div>
          </div>

          </div>
        
      </section>
     
     
  

    <CallToActions />
      
    <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(home), { ssr: false });
