import { createMuiTheme } from "@material-ui/core/styles";
import { trTR } from "@material-ui/core/locale";

const common = {
  typography: {
    color: "#fff",

    button: {
      textTransform: "none",
    },
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,

      },
    },
    MuiMenu: {
      paper: {
        borderRadius: 0,
      },
    },
    MuiPopover: {
      paper: {
        borderRadius: 0,
      },
    },

    MuiPaper: {
      // root: {
      //   backgroundColor: "#1a1924",
      // },
    },
  },
};
export default createMuiTheme(
  {
    palette: {
      type: "light",
      primary: {
        main: "#f35d22",
        contrastText: "#fff",
      },
      secondary: {
        main: "#1a1924",
        contrastText: "#fff",
      },

      // background: {
      //   default: "#0d1117",
      // },
    },
    ...common,
  },
  trTR
);