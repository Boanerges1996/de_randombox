import { green, pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: green[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: pink[100],
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

export { theme };
