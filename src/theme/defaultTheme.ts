import { createTheme } from "@mui/material";
import { green, grey, indigo, purple } from "@mui/material/colors";

/* The `createTheme` function is used to create a theme object that can be used to customize the styling of components in a Material-UI
application. In this case, an empty object `{}` is passed as an argument to create an empty theme.
 */
export const defaultTheme = createTheme({
    palette: {
        primary: {
          main: indigo[100],
        },
        secondary: {
          main: grey[100],
        },
      },
});