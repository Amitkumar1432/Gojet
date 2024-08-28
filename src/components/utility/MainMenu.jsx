import Link from "next/link";
// import {
//   homeItems,
//   blogItems,
//   pageItems,
//   dashboardItems,
// } from "../../data/mainMenuData";
// import CategoriesMegaMenu from "./CategoriesMegaMenu";
// import {
//   isActiveParent,
//   isActiveLink,
//   isActiveParentChaild,
// } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
       
       
        {/* <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
            <div className="tabs__controls d-flex items-center js-tabs-controls">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  className={`tabs__button px-30 py-10 sm:px-20 sm:py-15 rounded-4 fw-600 js-tabs-button ${
                    tab?.name === currentTab ? "is-tab-el-active" : ""
                  }`}
                  onClick={() => dispatch(addCurrentTab(tab?.name))}
                >
                  <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}></i>
                  {tab?.name}
                </button>
              ))}
            </div>
          </div>
         
        </div>  */}
    

        <li className={router.pathname === "/bus" ? "current" : ""}>
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
          <div className="tabs__controls d-flex items-center js-tabs-controls">
          <Link
                href="/bus"
                className="button -md white  text-black"
              >
                <button
                  
                  className={`tabs__button   px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 js-tabs-button ${
                    router.pathname === "/bus" ? "is-tab-el-active" : " bg-green-1"
                  }`}
                 // onClick={() => dispatch(addCurrentTab())}
                >
                  <i className={`icon-car text-25 mr-10 sm:mr-5`}></i>
                  BUS
                </button>
                </Link>
            </div>
          </div>
         </div>
        </li>

        <li className={router.pathname === "/flights" ? "current" : ""}>
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
          <div className="tabs__controls d-flex items-center js-tabs-controls">
          <Link
                href="/flights"
                className="button -md white text-black"
              >
               
              
                <button
                  
                  className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 js-tabs-button ${
                    router.pathname === "/flights" ? "is-tab-el-active" : "bg-green-1"
                  }`}
                 // onClick={() => dispatch(addCurrentTab())}
                >
                  <i className={`icon-tickets text-25 mr-10 sm:mr-5`}></i>
                  Flights
                </button>
                </Link>
            </div>
          </div>
         </div>
        </li>

        <li className={router.pathname === "/cruise" ? "current" : ""}>
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
          <div className="tabs__controls d-flex items-center js-tabs-controls">
          <Link
                href="/cruise"
                className="button -md white  text-black"
              >
                <button
                  
                  className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 js-tabs-button ${
                    router.pathname === "/cruise" ? "is-tab-el-active" : "bg-green-1"
                  }`}
                 // onClick={() => dispatch(addCurrentTab())}
                >
                  <i className={`icon-yatch text-25 mr-10 sm:mr-5`}></i>
                  Cruise
                </button>
           </Link>
            </div>
          </div>
         </div>
        </li>
        
        <li className={router.pathname === "/holyday" ? "current" : ""}>
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
          <div className="tabs__controls d-flex items-center js-tabs-controls">
          <Link
                href="/holyday"
                className="button -md white text-black"
              >
                <button
                  
                  className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 js-tabs-button ${
                    router.pathname === "/holyday" ? "is-tab-el-active" : "bg-green-1"
                  }`}
                 // onClick={() => dispatch(addCurrentTab())}
                 >
                  <i className={`icon-home text-25 mr-10 sm:mr-5`}></i>
                  Holyday Rentals
                </button>
          </Link>
            </div>
          </div>
         </div>
        </li>

       
       
      </ul>
    </nav>
  );
};

export default MainMenu;
