import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SocialIcons from '../../social/social';
import Headerstyles from './header.module.scss';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [isScrollValueMore, setIsScrollValueMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMore(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${isScrollValueMore ? 'fixed' : ''} ${Headerstyles.header}`}
    >
      <div className={Headerstyles.logo}>
        <Image src="/logo.svg" height="50" width="100" alt="Logo" />
      </div>
      <div className={Headerstyles.headerWrap}>
        <nav className={Headerstyles.navigation}>
          <ul>
            <li>
              <a>Residences</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={Headerstyles.headerRight}>
          <a className={Headerstyles.headerBtn} href="#">
            Schedule tour
          </a>
          <button
            className={`${isActive ? `${Headerstyles.active}` : ''} ${
              Headerstyles.toggleBtn
            }`}
            onClick={toggleClass}
          >
            <span className={Headerstyles.ham_menu1}></span>
            <span className={Headerstyles.ham_menu2}></span>
            <span className={Headerstyles.ham_menu3}></span>
          </button>
        </div>
      </div>
      <div
        className={`${isActive ? `${Headerstyles.active}` : ''} ${
          Headerstyles.hamMenu
        }`}
      >
        <button
          className={`${isActive ? `${Headerstyles.active}` : ''} ${
            Headerstyles.closeBtn
          }`}
          onClick={toggleClass}
        >
          <span className={Headerstyles.ham_menu1}></span>
          <span className={Headerstyles.ham_menu2}></span>
          <span className={Headerstyles.ham_menu3}></span>
        </button>
        <div className={Headerstyles.hamContainer}>
          <div className={Headerstyles.hamMainmenu}>
            <div className={Headerstyles.hamLogo}>
              <Image src="/ham-logo.svg" height="50" width="100" alt="Logo" />
            </div>

            <ul>
              <li>
                <a>Neighborhood</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>News & Events</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Amenities</a>
              </li>
              <li>
                <a>Floor Plans</a>
              </li>
            </ul>
          </div>
          <div className={Headerstyles.hamSubmenu}>
            <ul>
              <li>
                <a>WELCOME HOME COMMITMENT</a>
              </li>
              <li>
                <a>WHY BOZZUTO</a>
              </li>
            </ul>
          </div>
          <div className={Headerstyles.hamSocial}>
            <SocialIcons></SocialIcons>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
