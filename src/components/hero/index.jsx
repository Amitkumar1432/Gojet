import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../features/hero/findPlaceSlice";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  return (
    <section className="section-bg layout-pt-md layout-pb-sm10">
      {/* <div className="masthead__bg bg-green-1">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div> */}
   

      <div >
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
         
        </div> */}
       
        <section className="masthead -type-7">
        <div className="masthead-slider js-masthead-slider-7 height-350">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero7-next-active",
              prevEl: ".hero7-prev-active",
            }}
            >
            {/* <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/offer.webp" alt="image" />
                    </div>
                     <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1> 
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/bg.png" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/bg.png" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/bg.png" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev js-prev">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
              <i className="icon-arrow-left" />
            </button>
          </div>
       

          <div className="masthead-slider__nav -next js-next">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
              <i className="icon-arrow-right" />
            </button>
          </div>
        
        </div>
 

      
      </section>
        


      </div>
  
    </section>
  );
};

export default Index;
