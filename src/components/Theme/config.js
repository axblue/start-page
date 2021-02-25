import {
  blue,
  red,
  green,
  blueGrey,
  purple,
  grey,
  cyan,
  orange,
  yellow,
  pink,
} from "@material-ui/core/colors";

export const themes = {
  blueGrey: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: green[200],
        contrastText: "#fff",
      },
      background: {
        default: blueGrey[700],
        paper: blueGrey[800],
      },
    },
    present: [blueGrey[700], blueGrey[800]],
    link:
      "https://chrome.google.com/webstore/detail/simple-material-theme/mdnphgdednjnpcoeamekbogoblkdajep",
  },
  justBlack: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: red[200],
        contrastText: "#fff",
      },
      background: {
        default: "#000000",
        paper: "#2d2d2d",
      },
    },
    present: ["#2d2d2d", "#000000"],
    name: "Just Black",
    link:
      "https://chrome.google.com/webstore/detail/just-black/aghfnjkcakhmadgdomlmlhhaocbkloab",
  },
  rose: {
    palette: {
      type: "light",
      primary: blueGrey,
      secondary: {
        main: purple[200],
        contrastText: "#fff",
      },
      background: {
        default: "#efcac2",
        paper: "#cda397",
      },
    },
    present: ["#efcac2", "#cda397"],
    name: "Rose",
    link:
      "https://chrome.google.com/webstore/detail/rose/aobcgffnbkbipbflopponndoiommhnch",
  },
  seaFoam: {
    palette: {
      type: "light",
      primary: blueGrey,
      secondary: {
        main: purple[200],
        contrastText: "#fff",
      },
      background: {
        default: "#f1ffff",
        paper: "#b2e0de",
      },
    },
    present: ["#f1ffff", "#b2e0de"],
    name: "Sea Foam",
    link:
      "https://chrome.google.com/webstore/detail/sea-foam/lahipjfggmgneaopcckkaipmoandaboo",
  },
  slate: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: cyan[200],
        contrastText: "#fff",
      },
      background: {
        default: "#1b345c",
        paper: "#091932",
      },
    },
    present: ["#1b345c", "#091932"],
    name: "Slate",
    link:
      "https://chrome.google.com/webstore/detail/slate/cmhmcmgkegfffbbfobhjpdbimgmoohap",
  },
  blackWhite: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: orange[200],
        contrastText: "#fff",
      },
      background: {
        default: "#fff",
        paper: "#000",
      },
    },
    present: ["#fff", "#000"],
    name: "Black & White",
    link:
      "https://chrome.google.com/webstore/detail/black-white/mhhlgkfginnlendpfkhcmldikeepoefa",
  },
  highContrast: {
    palette: {
      type: "light",
      primary: blueGrey,
      secondary: {
        main: green[200],
        contrastText: "#fff",
      },
      background: {
        default: "#000",
        paper: "#ffdb00",
      },
    },
    present: ["#ffdb00", "#000"],
    name: "High Contrast Colorful",
    link:
      "https://chrome.google.com/webstore/detail/high-contrast-colorful/cdfdkmklcjlnnnlnplffpdiekfhkpbme",
  },
  oceanic: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: yellow[200],
        contrastText: "#fff",
      },
      background: {
        default: "#035a6d",
        paper: "#01434f",
      },
    },
    present: ["#035a6d", "#01434f"],
    name: "Oceanic",
    link:
      "https://chrome.google.com/webstore/detail/oceanic/gbbacdmgjdfajabgglpjifcedoajdimg",
  },
  marsala: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: pink[200],
        contrastText: "#fff",
      },
      background: {
        default: "#965052",
        paper: "#693130",
      },
    },
    present: ["#965052", "#693130"],
    name: "Marsala",
    link:
      "https://chrome.google.com/webstore/detail/marsala/jjlfmldcaheghnjjpgpoadjfppefjmkj",
  },
  classicBlue: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: pink[200],
        contrastText: "#fff",
      },
      background: {
        default: "#fff",
        paper: "#4791e6",
      },
    },
    present: ["#fff", "#4791e6"],
    name: "Classic Blue",
    link:
      "https://chrome.google.com/webstore/detail/classic-blue/mdifmgkofhcnndinbbdbaplplnmdalnc",
  },
  serenity: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: pink[200],
        contrastText: "#fff",
      },
      background: {
        default: "#91a8d1",
        paper: "#516fa3",
      },
    },
    present: ["#91a8d1", "#516fa3"],
    name: "Serenity",
    link:
      "https://chrome.google.com/webstore/detail/serenity/pjjaaonciccncnfeeecpnfgepojgmfpg",
  },
  honeysuckle: {
    palette: {
      type: "dark",
      primary: blueGrey,
      secondary: {
        main: pink[200],
        contrastText: "#fff",
      },
      background: {
        default: "#ea6f8c",
        paper: "#a02f4b",
      },
    },
    present: ["#ea6f8c", "#a02f4b"],
    name: "Honeysuckle",
    link:
      "https://chrome.google.com/webstore/detail/honeysuckle/iplhdhfokhijhogcccokkeokchhooibk",
  },
};

export default themes;
