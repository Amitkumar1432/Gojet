// import ActivityTypes from "../sidebar/ActivityTypes";
// import OthersFilter from "../sidebar/OthersFilter";
// import Duration from "../sidebar/Duration";
// import Languages from "../sidebar/Languages";
 import PirceSlider from "../common/PirceSlider";
 import LocationFilters from "../common/LocationFilters";
 import CategorieFilters from "../common/CategorieFilters";
// import PopularAttractions from "../sidebar/PopularAttractions";
// import MainFilterSearchBox from "./MainFilterSearchBox";

const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar__item -no-border position-relative">
        <Map /> 
      </div> */}
      

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
        <div className="sidebar-checkbox">
          <LocationFilters />
        </div>
        
      </div>
     

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Car Category</h5>
        <div className="sidebar-checkbox">
           <CategorieFilters /> 
        </div>
       
      </div>
     

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider /> 
          </div>
        </div>
      </div>
     

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Supplier</h5>
        <div className="sidebar-checkbox">
           <SupplierFilters /> 
        </div>
        
      </div>
     

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Bus Specifications</h5>
        <div className="sidebar-checkbox">
           <SpecificationsFilter />
        </div>
      </div>
    

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
        <div className="sidebar-checkbox">
           <MileageFilter /> 
        </div>
      
      </div>
     

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Transmission</h5>
        <div className="sidebar-checkbox">
          <TransmissionFilter /> 
        </div>
       
      </div> */}
   

  
    
    </>
  );
};

export default Sidebar;

