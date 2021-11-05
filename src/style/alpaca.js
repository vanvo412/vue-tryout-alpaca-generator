// import theme from "./theme";
//
// const HAIR_MAP = {
//     default: "default",
//     curls: "curls",
//     short: "short",
//     bang: "bang",
//     elegant: "elegant",
//     quiff: "quiff",
// };
//
// const ACCESSORIES_MAP = {
//     default: "",
//     flower: "flower",
//     earings: "earings",
//     headphone: "headphone",
//     glasses: "glasses",
// };
//
// const LEG_MAP = {
//     default: "default",
//     bubbleTea: "bubble-tea",
//     cookie: "cookie",
//     gameConsole: "game-console",
//     tiltBackward: "tilt-backward",
//     tiltForward: "tilt-forward",
// };
//
// const EYES_MAP = {
//     default: "default",
//     angry: "angry",
//     naughty: "naughty",
//     panda: "panda",
//     smart: "smart",
//     star: "star",
// };
//
// const MOUTH_MAP = {
//     default: "default",
//     astonished: "astonished",
//     eating: "eating",
//     laugh: "laugh",
//     tongue: "tongue",
// };
//
// const EARS_MAP = {
//     default: "default",
//     tiltBackward: "tilt-backward",
//     tiltForward: "tilt-forward",
// };
//
// const NECK_MAP = {
//     default: "default",
//     bendBackward: "bend-backward",
//     bendForward: "bend-forward",
//     thick: "thick",
// };
//
// export const ATTRIBUTE_KEY_MAP = {
//     background: "background",
//     hair: "hair",
//     accessories: "accessories",
//     leg: "leg",
//     eyes: "eyes",
//     mouth: "mouth",
//     ears: "ears",
//     neck: "neck",
// };
//
// export const ATTRIBUTE_MAP = {
//     [ATTRIBUTE_KEY_MAP.background]: {
//         key: "background",
//         text: "Background",
//         values: [
//             theme.colors.red70,
//             theme.colors.red60,
//             theme.colors.red50,
//             theme.colors.yellow70,
//             theme.colors.yellow60,
//             theme.colors.yellow50,
//             theme.colors.blue70,
//             theme.colors.blue60,
//             theme.colors.blue50,
//             theme.colors.green70,
//             theme.colors.green60,
//             theme.colors.green50,
//             theme.colors.darkblue70,
//             theme.colors.darkblue50,
//             theme.colors.darkblue30,
//             theme.colors.grey80,
//             theme.colors.grey70,
//             theme.colors.grey40,
//         ],
//     },
//     [ATTRIBUTE_KEY_MAP.hair]: {
//         key: "hair",
//         text: "Hair",
//         values: Object.values(HAIR_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.accessories]: {
//         key: "accessories",
//         text: "Accessories",
//         values: Object.values(ACCESSORIES_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.leg]: {
//         key: "leg",
//         text: "Leg",
//         values: Object.values(LEG_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.eyes]: {
//         key: "eyes",
//         text: "Eyes",
//         values: Object.values(EYES_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.mouth]: {
//         key: "mouth",
//         text: "Mouth",
//         values: Object.values(MOUTH_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.ears]: {
//         key: "ears",
//         text: "Ears",
//         values: Object.values(EARS_MAP),
//     },
//     [ATTRIBUTE_KEY_MAP.neck]: {
//         key: "neck",
//         text: "Neck",
//         values: Object.values(NECK_MAP),
//     },
// };
//
// export const ATTRIBUTES = [
//     ATTRIBUTE_KEY_MAP.hair,
//     ATTRIBUTE_KEY_MAP.ears,
//     ATTRIBUTE_KEY_MAP.eyes,
//     ATTRIBUTE_KEY_MAP.mouth,
//     ATTRIBUTE_KEY_MAP.neck,
//     ATTRIBUTE_KEY_MAP.leg,
//     ATTRIBUTE_KEY_MAP.accessories,
//     ATTRIBUTE_KEY_MAP.background,
// ];

export const ALPACA = [
    {
        id: 0,
        label: "Backgrounds",
        directory: "backgrounds",
        selected: false,
        items: [
            { id: 0, label: "Yellow 50", filename: "yellow50", selected: false },
            { id: 1, label: "Blue 50", filename: "blue50", selected: false },
            { id: 2, label: "Blue 60", filename: "blue60", selected: false },
            { id: 3, label: "Blue 70", filename: "blue70", selected: false },
            { id: 4, label: "Green 60", filename: "green60", selected: false },
            { id: 5, label: "Green 70", filename: "green70", selected: false },
            { id: 6, label: "Grey 40", filename: "grey40", selected: false },
            { id: 7, label: "Grey 70", filename: "grey70", selected: false },
            { id: 8, label: "Grey 80", filename: "grey80", selected: false },
            { id: 9, label: "Red 50", filename: "red50", selected: false },
            { id: 10, label: "Red 60", filename: "red60", selected: false },
            { id: 11, label: "Red 70", filename: "red70", selected: false },
            { id: 13, label: "Yellow 50", filename: "yellow50", selected: false },
            { id: 14, label: "Yellow 60", filename: "yellow60", selected: false },
            { id: 15, label: "Yellow 70", filename: "yellow70", selected: false },
        ],
    },
    {
        id: 1,
        label: "Ears",
        directory: "ears",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            {
                id: 1,
                label: "Tilt Backward",
                filename: "tilt-backward",
                selected: false,
            },
            {
                id: 2,
                label: "Tilt Forward",
                filename: "tilt-forward",
                selected: false,
            },
        ],
    },
    {
        id: 2,
        label: "Eyes",
        directory: "eyes",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            { id: 1, label: "Angry", filename: "angry", selected: false },
            { id: 2, label: "Naughty", filename: "naughty", selected: false },
            { id: 3, label: "Panda", filename: "panda", selected: false },
            { id: 4, label: "Smart", filename: "smart", selected: false },
            { id: 5, label: "Star", filename: "star", selected: false },
        ],
    },
    {
        id: 3,
        label: "Hair",
        directory: "hair",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            { id: 1, label: "Bang", filename: "bang", selected: false },
            { id: 2, label: "Curls", filename: "curls", selected: false },
            { id: 3, label: "Elegant", filename: "elegant", selected: false },
            { id: 4, label: "Fancy", filename: "fancy", selected: false },
            { id: 5, label: "Short", filename: "short", selected: false },
        ],
    },
    {
        id: 4,
        label: "Leg",
        directory: "leg",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            { id: 1, label: "Bubble Tea", filename: "bubble-tea", selected: false },
            { id: 2, label: "Cookie", filename: "cookie", selected: false },
            {
                id: 3,
                label: "Game Console",
                filename: "game-console",
                selected: false,
            },
            {
                id: 4,
                label: "Tile Backward",
                filename: "tilt-backward",
                selected: false,
            },
            {
                id: 5,
                label: "Tilt Forward",
                filename: "tilt-forward",
                selected: false,
            },
        ],
    },
    {
        id: 5,
        label: "Mouth",
        directory: "mouth",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            { id: 1, label: "Astonished", filename: "astonished", selected: false },
            { id: 2, label: "Eating", filename: "eating", selected: false },
            { id: 3, label: "Laugh", filename: "laugh", selected: false },
            { id: 4, label: "Tongue", filename: "tongue", selected: false },
        ],
    },
    {
        id: 6,
        label: "Neck",
        directory: "neck",
        selected: false,
        items: [
            { id: 0, label: "Default", filename: "default", selected: false },
            {
                id: 1,
                label: "Bend Backward",
                filename: "bend-backward",
                selected: false,
            },
            {
                id: 2,
                label: "Bend Forward",
                filename: "bend-forward",
                selected: false,
            },
            { id: 3, label: "Thick", filename: "thick", selected: false },
        ],
    },
    {
        id: 7,
        label: "Accessories",
        directory: "accessories",
        selected: false,
        items: [
            // { id: 0, label: "Default", filename: "default", selected: false },
            { id: 1, label: "Earings", filename: "earings", selected: false },
            { id: 2, label: "Flower", filename: "flower", selected: false },
            { id: 3, label: "Glasses", filename: "glasses", selected: false },
        ],
    },
    {
        id: 8,
        label: "Nose",
        directory: "nose",
        selected: false,
        items: [{ id: 0, label: "Default", filename: "default", selected: false }],
    }
];