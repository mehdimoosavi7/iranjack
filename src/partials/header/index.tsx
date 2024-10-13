import { ReactSVG } from "react-svg";
import { FaEllipsisH } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src="../images/Union.png" />
        <span className="header-username">van arsdel</span>
      </div>
      <div>
        <ReactSVG className="header-bot" src="../images/Bot.svg" />
        <FaEllipsisH color="#242424" size={16} />
      </div>
    </header>
  );
};

export default Header;
