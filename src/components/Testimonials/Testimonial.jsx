import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Extra fast delivery. Everything to be my wish, Really great seller. I appreciate and highly recommended to friends use his services.",
    },
    {
      img: profilePic2,
      review:
        "Hurera Bhalli is great to work with, I had him work on a fairly complex application and after a couple revisions. He came up with exactly what I asked for. 10/10.",
    },
    {
      img: profilePic3,
      review:
        "Hurera is perfect for UI designs and i will highly recommend him to my friends. work hard according to my requirements and very open to revisions. Looking forward to work with him again. Thank you. There should be space for 100star i will have give him.",
    },
    {
      img: profilePic4,
      review:
        "good communication skills and we'll understood he's the best.",
    },
    {
      img: profilePic2,
      review:
        "great service and quality design. Good communication Looking forward to working again. :) Thanks, Hurera",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
