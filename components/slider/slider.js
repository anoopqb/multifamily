import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from '../button/button';
import Sliderstyles from './slider.module.scss';
import UseRefPlayer from './video';

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
    document
      .getElementsByClassName(`${Sliderstyles.slickControls}`)[0]
      .classList.add(`${Sliderstyles.playActive}`);
    document
      .getElementsByClassName(`${Sliderstyles.slickControls}`)[0]
      .classList.remove(`${Sliderstyles.pauseActive}`);
  }
  pause() {
    this.slider.slickPause();
    document
      .getElementsByClassName(`${Sliderstyles.slickControls}`)[0]
      .classList.add(`${Sliderstyles.pauseActive}`);
    document
      .getElementsByClassName(`${Sliderstyles.slickControls}`)[0]
      .classList.remove(`${Sliderstyles.playActive}`);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className={Sliderstyles.sliderContainer + ` slickContainer`}>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className={Sliderstyles.slideWrap}>
            <Image src="/banner-img.jpg" layout="fill" alt="" />
            <div className={Sliderstyles.contentWrap}>
              <h1>Fusce semper risus</h1>
              <p>Maecenas lacus leox</p>
              <Button href="#" type="link">
                Find Apartments
              </Button>
            </div>
          </div>
          <div className={Sliderstyles.slideWrap}>
            <Image src="/banner-img.jpg" layout="fill" alt="" />
          </div>
          <div className={Sliderstyles.slideWrap}>
            <UseRefPlayer />
          </div>
        </Slider>
        <div className={Sliderstyles.slickControls}>
          <button className={Sliderstyles.slickPlay} onClick={this.play}>
            Play
          </button>
          <button className={Sliderstyles.slickPause} onClick={this.pause}>
            Pause
          </button>
        </div>
        <style>{`
          .slickContainer .slick-prev {
            left: 40px;
            z-index: 9;
          }
          .slickContainer .slick-next {
            right: 40px;
            z-index: 9;
            transform: translateY(-50%) rotate(180deg);
          }
          @media(max-width:768px)
          {
            .slick-prev,
          .slick-next 
          {
            display:none !important;
          }
          }
          .slickContainer .slick-next:before,
          .slickContainer .slick-prev:before {
            display: none;
          }
          .slick-prev,
          .slick-next {
            position: absolute;
            top: 50%;
            width: 48px;
            height: 48px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: url(/left-arrow-white.png) no-repeat center center
              transparent;
            background-size: auto 31px;
          }
          .slick-prev:hover,
          .slick-prev:focus,
          .slick-next:hover,
          .slick-next:focus {
            background: url(/left-arrow-white.png) no-repeat center center
              transparent;
            background-size: auto 31px;
          }
        `}</style>
      </div>
    );
  }
}
