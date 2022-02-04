import { Carousel, Col, Row } from "antd";

const contentStyle = {
  height: "660px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeBody() {
  return (
    <div style={{ backgroundColor: "#ebeeec", minHeight: "850px" }}>
      <Row justify="center">
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={18}
          style={{ height: "100%", width: "100%" }}
        >
          <Carousel autoplay>
            <div>
              <div
                style={{
                  height: "660px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",

                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.2), 
                    rgba(0, 0, 0, 0.7)
                  ),
                  url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
                }}
              >
                1
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "660px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",

                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.2), 
                    rgba(0, 0, 0, 0.7)
                  ),
                  url(https://images.unsplash.com/photo-1512729343400-4fcf83a18f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)`,
                }}
              >
                2
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "660px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",

                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.2), 
                    rgba(0, 0, 0, 0.7)
                  ),
                  url(https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80)`,
                }}
              >
                3
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "660px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",

                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.2), 
                    rgba(0, 0, 0, 0.7)
                  ),
                  url(https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)`,
                }}
              >
                4
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
