import Icon from "@mui/material/Icon";
import Debox from "../../assets/logos/logo.png";

function LogoIcon(props) {
  return (
    <Icon
      style={{ textAlign: "center", width: "40px", height: "40px" }}
      {...props}
    >
      <img
        src={Debox}
        alt="jsajsha"
        style={{ display: "flex", height: "inherit", width: "inherit" }}
      />
    </Icon>
  );
}

export { LogoIcon };
