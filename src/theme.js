import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: purple[500] },
    secondary: { main: purple[50] },
  },
  status: {
    danger: "orange",
  },
  tonalOffset: 0.1,
});

// export const darkTheme = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: { main: purple[500] },
//     secondary: { main: purple[50] },
//   },
//   status: {
//     danger: "orange",
//   },
// });
