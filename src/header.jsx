import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [like, setLike] = useState(false);
  function changeColor() {
    setLike(!like);
  }
  return (
    <header className="flex justify-between items-center">
      <div className="py-4 flex items-center gap-4 font-bold text-black dark:text-textcolor text-2xl ">
        <span className="bg-lightpurple py-2 px-4 rounded-lg">
          {" "}
          <FontAwesomeIcon
            icon={faUniversalAccess}
            style={{ color: "#a629f5" }}
          />{" "}
        </span>
        Quiz
      </div>
      <div className="flex items-center gap-4">
        <span onClick={() => changeColor()}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: like ? "pink" : "" }}
          />{" "}
        </span>
      </div>
    </header>
  );
}

export default Header;
