import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";


const index = () => {
  return (
    <>
    <footer className="bg-white">

      <div className="">
        <div className="container"> 
        <div className="pt-10 pb-10">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img src="/img/general/logo.png" alt="image" width={200} />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo />
              </div>
              <div className="row x-gap-20 y-gap-15 pt-10">
                <div className="col-12">
                  <h5 className="text-16 fw-500">Your all-in-one travel app</h5>
                </div>
                <AppButton />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row y-gap-30">
                
                <FooterContent />
              </div>
              
            </div>
         
          </div>
         
        </div>
        </div>

        <div className=" border-top-white-15 bg-blue-1 text-white">
          <Copyright />
        </div>
       
      </div>
   
    </footer>

    </>
  );
};

export default index;
