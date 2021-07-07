import { Link } from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;
library.add(faYoutube, faInstagram, faFacebook, faTwitter);
const SocialIcons = () => {
  return (
    <ul className="social-icons flex items-baseline justify-center py-2 bg-black text-white h-20">
      <li>
        <a
          className="text-white"
          href="https://facebook.com"
          rel="noopener"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className=" mr-3 h-10 w-10 text-white"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com"
          rel="noopener"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className=" mr-3 h-10 w-10 text-white"
          />
        </a>
      </li>
      <li>
        <a href="https://youtube.com" rel="noopener" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            className=" mr-3 h-10 w-10 text-white"
          />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" rel="noopener" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className=" mr-3 h-10 w-10 text-white"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
