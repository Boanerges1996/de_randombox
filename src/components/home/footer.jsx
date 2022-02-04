import { Button, Col, Divider, Input, Row, Typography } from "antd";
import React from "react";
import {
  BsArrowUpRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTelephoneOutboundFill,
  BsMailbox,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{ minHeight: "400px", background: "#364d79", paddingTop: "70px" }}
    >
      <Row justify="center">
        <Col xs={22} sm={22} md={20}>
          <Row>
            <Col xs={24} sm={24} md={10} style={{ marginBottom: "30px" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Newsletter
              </Typography.Title>
              <Typography.Text style={{ color: "white", marginBottom: "10px" }}>
                Get information about our offers <br /> and new products.
              </Typography.Text>
              <br />
              <br />

              <Input.Search
                style={{ width: "80%" }}
                enterButton={
                  <Button
                    type="primary"
                    icon={
                      <BsArrowUpRight
                        style={{
                          verticalAlign: "baseline",
                          marginInline: "5px",
                        }}
                      />
                    }
                  >
                    Search
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24} md={6} style={{ marginBottom: "30px" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Pages
              </Typography.Title>
              <Link to="/">
                <span type="link" style={{ color: "white" }}>
                  Home
                </span>
              </Link>
              <br />
              <Link to="/">
                <span type="link" style={{ color: "white" }}>
                  Items
                </span>
              </Link>
              <br />
              <Link to="/">
                <span type="link" style={{ color: "white" }}>
                  New Collection
                </span>
              </Link>

              <br />
              <br />

              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Location
              </Typography.Title>
              <Typography.Text style={{ color: "white" }}>
                Haatso Accra
              </Typography.Text>
            </Col>
            <Col xs={24} sm={24} md={6} style={{ marginBottom: "30px" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Follow
              </Typography.Title>
              <IconButton color="primary">
                <BsFacebook />
              </IconButton>
              <IconButton color="primary">
                <BsInstagram />
              </IconButton>
              <IconButton color="primary">
                <BsLinkedin />
              </IconButton>
              <IconButton color="primary">
                <BsTwitter />
              </IconButton>
              <br />
              <br />
              <br />
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: "bolder" }}
              >
                Contact
              </Typography.Title>
              <IconButton color="primary" style={{ color: "white" }}>
                <BsTelephoneOutboundFill />
              </IconButton>
              <Typography.Text style={{ color: "white", fontSize: "1.2em" }}>
                +233501594597
              </Typography.Text>
              <br />
              <IconButton color="primary" style={{ color: "white" }}>
                <BsMailbox />
              </IconButton>
              <Typography.Text style={{ color: "white", fontSize: "1.2em" }}>
                hazungah@luxstek.com
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider style={{ backgroundColor: "#4f70b0" }} />
      <div
        style={{
          textAlign: "center",
          paddingBlock: "5px",
          marginBottom: "30px",
        }}
      >
        copyright © 2022 DeRandomBox
      </div>
    </div>
  );
}
