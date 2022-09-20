import Link from 'next/link';
import FacebookLogo from './fb_icon.svg';
import InstagramLogo from './insta_icon.svg';
import SocialStyles from './social.module.scss';

const SocialIcons = () => {
  return (
    <div className={SocialStyles.socialContainer}>
      <Link href="/">
        <a>
          <FacebookLogo></FacebookLogo>
        </a>
      </Link>
      <Link href="/">
        <a>
          <InstagramLogo></InstagramLogo>
        </a>
      </Link>
    </div>
  );
};

export default SocialIcons;
