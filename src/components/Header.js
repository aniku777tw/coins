import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://hsipl.yuntech.edu.tw/static/media/LOGO_1.4986446d.png"
          alt="LOGO"
        ></img>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search HSIPL" type="text" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>hsipl 6969</h4>
        </div>
        <div className="header__info__btn">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
