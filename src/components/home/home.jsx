import { IconButton } from "@mui/material";
import { Col, Row, Typography } from "antd";
import React from "react";
import { MdMenu } from "react-icons/md";
import { LogoIcon } from "../custom/icons/logo";

import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { primaryColor } from "../../colors";
import { BsFillCartFill } from "react-icons/bs";
import Homehead from "./head";
import HomeBody from "./home_body";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Homehead />
      <HomeBody />
      <Footer />
    </div>
  );
}
