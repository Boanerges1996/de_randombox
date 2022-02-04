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

export default function Homehead() {
  return (
    <div>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          style={{ paddingTop: "10px", paddingLeft: "10px" }}
        >
          <IconButton color="primary">
            <LogoIcon />
          </IconButton>
          <span style={{ fontWeight: "bold", fontSize: "1.4em" }}>
            De RandomBox
          </span>
        </Col>
        <Col xs={0} sm={0} md={12}>
          <Row>
            <Col
              span={16}
              style={{ paddingInline: "5px", paddingBlock: "10px" }}
            ></Col>

            <Col
              span={8}
              style={{
                textAlign: "right",
                paddingRight: "10px",
                paddingTop: "5px",
              }}
            >
              <IconButton color="primary">
                <BsFillCartFill />
              </IconButton>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={0}
          style={{ fontSize: "30px", textAlign: "right" }}
        >
          <IconButton color="primary" style={{ marginInline: "5px" }}>
            <BsFillCartFill />
          </IconButton>
          <IconButton color="primary">
            <MdMenu style={{ fontSize: "30px" }} />
          </IconButton>
        </Col>
      </Row>
    </div>
  );
}
