import Router from "next/router";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -w-900 z-2 bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-40">
        <div className="button-grid items-center">
          <LocationSearch />
          

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div>
       

          <GuestSearch />
        

          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-green-2 text-white"
              onClick={() => Router.push("/bus/buslist")}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          
        </div>
      </div>
     
    </>
  );
};

export default MainFilterSearchBox;
