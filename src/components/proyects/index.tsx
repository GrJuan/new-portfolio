// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";


// import required modules

import img_1 from "../../assets/images/project-image01.png";
import img_2 from "../../assets/images/project-image02.png";
import img_3 from "../../assets/images/project-image03.png";
import img_4 from "../../assets/images/project-image04.png";
import img_5 from "../../assets/images/project-image05.png";
import img_6 from "../../assets/images/project-image06.png";
import img_7 from "../../assets/images/project-image07.png";
import img_8 from "../../assets/images/project-image08.png";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Proyects() {
  return (
    <>
      <div className="content-proyect">
        <div className="content-titles-proyect">
          <div className="proyect-item1">
            <h1 className="title-proyect">My Latest Works</h1>
            <p>Some of my latest projects</p>
          </div>
          <div className="proyect-item2">
            <p>Look at projects</p>
          </div>
        </div>

        <Swiper data-aos="fade-right"
        slidesPerView="auto"
          breakpoints={{
            480: {
              width: 0,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1200: {
              width: 1200,
              slidesPerView: 2.5,
            },
          }}
        
          spaceBetween={10}
          freeMode={true}
          className="mySwiper swiper-container"
        >
          <SwiperSlide className="item-1">
            <img src={img_1} alt="img-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_2} alt="img-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_3} alt="img-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_4} alt="img-4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_5} alt="img-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_6} alt="img-6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_7} alt="img-7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_8} alt="img-8" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
