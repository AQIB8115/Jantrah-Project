import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import LanguageDropdown from "../../components/Common/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../../components/Common/TopbarDropdown/NotificationDropdown";

//i18n
import { withTranslation } from "react-i18next";

//import images
// import logoSm from "../../assets/images/logo.png";
// import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo.png";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";
import ProfileMenu from "../../components/Common/TopbarDropdown/ProfileMenu";
import AppsDropdown from "../../components/Common/TopbarDropdown/AppsDropdown";

const Header = (props) => {
  const [search, setsearch] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);


const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
      <button
      ref={ref}
       onClick={onClick}
      type="button" 
       className="btn "
       style={{ 
        backgroundColor:"#324352",
         color: "white",
          borderRadius: "0.25rem",
          width: "38px",
          height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
          border: "none",
          cursor: "pointer",     
          }}
       >
             <i className="ri-calendar-2-line" style={{ fontSize: "20px" }}></i>
             </button>
             ));
  

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header ">
          <div className="d-flex ">
            <div className="navbar-brand-box d-flex align-items-center text-center  ">
             

              <Link 
                to="/" 
                className="d-flex align-items-center text-decoration-none"
              >

                  <img src={logoLight} alt="logo " height="42" />
                  <h1 
                  style={{ 
                    color: "white", 
                    marginLeft: "10px", 
                    fontSize: "35px", 
                    whiteSpace: "nowrap" 
                    }}
                    >
                    Jantrah
                    </h1>
                {/* </span> */}
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle();
              }}
            >
              <i className="ri-menu-2-line align-middle"></i>
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">

              </div>
            </form>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="ri-search-line" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="ri-search-line" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <LanguageDropdown /> */}
            {/* <AppsDropdown /> */}

            <div className="dropdown d-none d-lg-inline-block ms-1">
              {/* <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon"
                data-toggle="fullscreen"
              >
                <i className="ri-fullscreen-line" />
              </button> */}
            </div>

             <div className="d-flex align-items-center gap-2">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              // customInput={<CustomDateInput />}
              dateFormat="dd/MM/yyyy"
              popperPlacement="bottom-end"
              // minDate={new Date()}
              isClearable
              />

            <NotificationDropdown />

            <ProfileMenu />
          </div>
           

            <div
              className="dropdown d-inline-block"
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
            >
              {/* <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog"></i>
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
