import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import topbannerStyles from './topbanner.module.scss';

export default function Topbanner() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible((current) => !current);
  };
  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className={`${isVisible ? `${topbannerStyles.hide}` : ''} ${
        topbannerStyles.topBanner + ` slickWrap`
      } `}
    >
      <div className={topbannerStyles.close} onClick={handleClose}>
        <Image src="/close-ic.svg" height="20px" width="20px" alt="" />
      </div>
      <Slider {...settings}>
        <div className={topbannerStyles.slideBox}>
          <h3>Proin eu condimentum diam</h3>
          <p>
            Donec ullamcorper, tortor eget mattis imperdiet, nunc ligula
            scelerisque quam, a fringilla enim lacus non erat.{' '}
          </p>
        </div>
        <div className={topbannerStyles.slideBox}>
          <h3>Proin eu condimentum diam</h3>
          <p>
            Donec ullamcorper, tortor eget mattis imperdiet, nunc ligula
            scelerisque quam, a fringilla enim lacus non erat.{' '}
          </p>
        </div>
        <div className={topbannerStyles.slideBox}>
          <h3>Proin eu condimentum diam</h3>
          <p>
            Donec ullamcorper, tortor eget mattis imperdiet, nunc ligula
            scelerisque quam, a fringilla enim lacus non erat.{' '}
          </p>
        </div>
      </Slider>

      <style>{`
        .slickWrap .slick-dots {
          text-align: left !important;
        }
        .slickWrap .slick-dots li {
          width: auto !important;
          height: auto !important;
        }
        .slickWrap .slick-dots li button {
          height: 12px !important;
          width: 12px !important;
          border: 2px solid #fff !important;
          border-radius: 50%;
          padding: 0px !important;
        }
        .slickWrap .slick-dots li button:before {
          display: none;
        }
        .slickWrap .slick-dots li:first-child {
          margin-left: 0px;
        }
        .slickWrap .slick-dots li.slick-active button {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}
