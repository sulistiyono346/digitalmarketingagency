import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as RouteUrl from "Config/Routes/routes";
import { Nav } from "react-bootstrap";
import Logo from "Assets/Images/logo.svg";
import Chat from "Assets/Images/chat-mail.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Alert from "Assets/Images/alert.svg";

import "./styles.scss";
import useBreakpoint from "Config/Helpers/useBreakpoint";

export default function Header() {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const [isChecked, setChecked] = useState(false);
  const size = ["xs", "sm", "md"];
  const isMobile = size.includes(breakpoint);

  const handleChange = (e) => {
    const el = e?.target?.checked;
    if (el) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  const handleNavigation = (nav, param) => {
    navigate(nav, param);
  };

  return (
    <div className="s-header-container my-scrollable-element">
      <input
        value={isChecked}
        className="side-menu"
        type="checkbox"
        id="side-menu"
        onClick={(e) => handleChange(e)}
      />
      <nav className="nav-mobile">
        <Nav activeKey="/" onSelect={() => setChecked(false)}>
          <div
            className="mobile-icon"
            onClick={() => handleNavigation(RouteUrl.Home)}
          >
            <Logo />
          </div>
          <Nav.Item>
            <Nav.Link
              href=""
              onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=""
              onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
            >
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=""
              onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=""
              onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
            >
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=""
              onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
            >
              Support
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
      {isMobile ? (
        <>
          <div className="mobile-left-container">
            <Logo />
          </div>
          <div className="mobile-right-container">
            <div className="chat-container">
              <Chat />
            </div>
            <div className="chat-container">
              <Alert />
            </div>
            <div className="buger-container">
              <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
              </label>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="left-container">
            <Logo />
          </div>
          <div className="main-container">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.Home)}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
                >
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
                >
                  Blog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href=""
                  onClick={() => handleNavigation(RouteUrl.UnderDevelopment)}
                >
                  Support
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="right-container">
            <div className="chat-container">
              <Chat />
            </div>
            <div className="alert-container">
              <Alert />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
