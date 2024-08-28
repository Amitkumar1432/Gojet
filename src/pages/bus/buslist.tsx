
 import TopHeaderFilter from "../../components/common/TopHeaderFilter";
 import Sidebar from "../../components/common/Sidebar";
 import CarPropertes from "../../components/common/CarPropertes";
 import Footer from "../../components/footer";
import Header from "../../components/header/header";
import CallToActions from "../../components/utility/CallToActions";

const index = () => {
  return (
    <>
      {/* <Seo pageTitle="Car List v1" /> */}
  

      <div className="header-margin"></div>
    

      <Header />
      

      <section className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600">Book a Bus</h1>
              </div>
             
              {/* <MainFilterSearchBox /> */}
            </div>
            
          </div>
        </div>
      </section>
    
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
         

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
          
              </div>
             
            </div>
          
            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
          
              <div className="row y-gap-30">
                <CarPropertes />
              </div>
            
             
            </div>
          
          </div>
        
        </div>
      
      </section>
   

      <CallToActions />
      
      <Footer />
    </>
  );
};

export default index;
