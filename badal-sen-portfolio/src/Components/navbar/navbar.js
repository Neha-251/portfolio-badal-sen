import "./navbar.css";
import { MenuContent } from "./menu_content";
import { SubMenu } from "./subMenu";
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleIsOpen = () => {
    isOpen? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <nav>
        <div className="logo">BSen</div>
        <div className="leftNav">
          <div className={isOpen? "menu-cross-open" : "menu-cross"} onClick={handleIsOpen}>
            <div className="line top"></div>
            <div className="line middle"></div>
            <div className="line bottom"></div>
          </div>

          <div className={ isOpen? "container-open" : "container-close container"}>
            {MenuContent.map((el, ind) => {
              return (
                <>
                  <div className="menu" key={ind}>
                    <div className="menuItem">{el.menu}</div>
                    {el.subMenu && <SubMenu data={el.subMenu} />}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="spacediv"></div>
    </>
  );
};
