import React from "react";
import "./testimonials.css";
import data from "./data.js";
// import Swiper and modules styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  // console.log(data);
  return (
    <section id="testimonials">
      <h5>Avis clients</h5>
      <h2>Avis clients</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
