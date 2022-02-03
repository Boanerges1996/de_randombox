import { ThemeProvider } from "@emotion/react";
import { Grid, IconButton } from "@mui/material";
import { Button, Col, Row } from "antd";
import React from "react";
import { MdMenu } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Button>dsd</Button>
        </Col>
        <Col xs={0} sm={0} md={12}></Col>
        <Col
          xs={12}
          sm={12}
          md={0}
          style={{ fontSize: "30px", textAlign: "right" }}
        >
          <IconButton color="primary">
            <MdMenu />
          </IconButton>
        </Col>
      </Row>
    </div>
  );
}
