import Social from "../../components/common/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10 pr-20 pl-20">
      
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <a
                href=""
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
               UBK INFOTECH PVT LTD
              </a>
              All rights reserved.
            </div>
          </div>
       
          <div className="col-auto">
            <div className="d-flex x-gap-15">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Site Map</a>
            </div>
          </div>

          
         
        </div>
        
      </div>
      
      <div className="col-auto">
                <h5 className="text-16 fw-500">
                  Follow us on social media
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>   

     
    </div>
  );
};

export default Copyright;
