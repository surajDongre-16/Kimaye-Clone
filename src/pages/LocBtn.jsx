import React, { useContext } from "react";
import { LocContext } from "../ContextApi/LocationAuth";
import Loc from "../assests/Loc.png";
import Loca from "./Loca.module.css";
import Location from "../pages/Location";

const LocBtn = () => {
  const {
    handleClick,
    isOpen,
    onOpen,
    onClose,
    size,
    setSize,
    pin,
    setPin,
    ref,
  } = useContext(LocContext);

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <div>
      <span
        className={Loca.btn}
        onClick={() => handleSizeClick(size)}
        key={size}
        m={4}
        _hover="none"
        bg="rgb(236,236,236)"
      >
        {
          <div>
            <img className={Loca.loc_logo} src={Loc} />
            <sub>
              <b>{pin}</b>
            </sub>
          </div>
        }
      </span>

      <Location />
    </div>
  );
};

export default LocBtn;
