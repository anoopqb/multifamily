import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '../../social/social';
import FooterStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footerLeft}>
        <SocialIcons></SocialIcons>
      </div>
      <div className={FooterStyles.footerRight}>
        <div className={FooterStyles.footerAddress}>
          <Link href="#">
            <a>
              142 Grove Street<br></br> Bethpage, New York, 11714
            </a>
          </Link>
        </div>
        <div className={FooterStyles.footerLogo}>
          <Link href="/">
            <a>
              <Image
                src="/footer_logo@3x.png"
                alt="logo"
                layout="responsive"
                width="153"
                height="67"
              />
            </a>
          </Link>
        </div>
        <div className={FooterStyles.footerLinks}>
          <div className={FooterStyles.footerPrivacy}>
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className={FooterStyles.footerIcons}>
            <Link href="#">
              <a>
                <Image
                  src="/image_17@4x.png"
                  alt="eho"
                  layout="fixed"
                  width="25"
                  height="25"
                />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Image
                  src="/image_18@4x.png"
                  alt="eho"
                  layout="fixed"
                  width="25"
                  height="25"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
