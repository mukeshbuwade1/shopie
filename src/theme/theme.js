import { extendTheme } from 'native-base';

const theme = extendTheme({
    fontConfig: {
        NunitoSans: {
            400: {
                normal: "NunitoSans-Regular",
                // italic: "",
            },
            600: {
                normal: "NunitoSans-SemiBold",
                // italic: "",
            },
            700: {
                normal: "NunitoSans-Bold",
                // italic: "",
            },
        },
        Roboto: {
            100: {
                normal: "Roboto-Light",
                italic: "Roboto-LightItalic",
            },
            200: {
                normal: "Roboto-Light",
                italic: "Roboto-LightItalic",
            },
            300: {
                normal: "Roboto-Light",
                italic: "Roboto-LightItalic",
            },
            400: {
                normal: "Roboto-Regular",
                italic: "Roboto-Italic",
            },
            500: {
                normal: "Roboto-Medium",
            },
            600: {
                normal: "Roboto-Medium",
                italic: "Roboto-MediumItalic",
            },
            // Add more variants
            //   700: {
            //     normal: 'Roboto-Bold',
            //   },
            //   800: {
            //     normal: 'Roboto-Bold',
            //     italic: 'Roboto-BoldItalic',
            //   },
            //   900: {
            //     normal: 'Roboto-Bold',
            //     italic: 'Roboto-BoldItalic',
            //   },
        },
        JosefinSans: {
            400: {
                normal: "JosefinSans-Medium"
            }
        }
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
        heading: "Roboto",
        body: "Roboto",
        mono: "Roboto",
        JosefinSans: "JosefinSans",
        NunitoSans: "NunitoSans"
    },
    colors: {
        // Add new color
        primary: {
            50: '#ffffff',
            100: '#ebebeb',
            200: '#cccccc',
            300: '#B8B8B8',
            400: '#999999',
            500: '#707070',
            600: '#525252',
            700: '#252525',
            800: '#161616',
            900: '#000000',
        },
        // Redefining only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },
    },
    components: {
        // Button: {
        //   // Can simply pass default props to change default behaviour of components.
        //   baseStyle: {
        //     rounded: 'md',
        //   },
        //   defaultProps: {
        //     colorScheme: 'red',
        //   },
        // },
        // Heading: {
        //   // Can pass also function, giving you access theming tools
        //   baseStyle: ({ colorMode }) => {
        //     return {
        //       color: colorMode === 'dark' ? 'red.300' : 'blue.300',
        //       fontWeight: 'normal',
        //     };
        //   },
        // },
        Heading: {
            baseStyle: (props) => {
                return {
                    _light: { color: 'primary.800' },
                    _dark: { color: 'primary.50' },
                };
            },
            defaultProps: {
                // colorScheme: 'red',
                // bg: "white.900"
                letterSpacing:1,
                fontFamily: "NunitoSans-SemiBold"
            },
        },
        Text: {
            baseStyle: (props) => {
                return {
                    _light: { color: 'primary.800' },
                    _dark: { color: 'primary.50' },
                    fontFamily: "NunitoSans-Regular"
                };
            },
            defaultProps: {
                // colorScheme: 'red',
                // bg: "white.900"
            },
        },
        Center: {
            baseStyle: () => (
                {
                    _light: { bg: 'primary.50' },
                    _dark: { bg: 'primary.800' },
                }
            ),
            defaultProps: {
                // flex: 1,
                justifyContent: "center",
                alignItems: "center",
            },
        },
        Box: {
            baseStyle: () => (
                {
                    _light: { bg: 'primary.50' },
                    _dark: { bg: 'primary.800' },
                }
            )
        },
        // View: {
        //     baseStyle: () => (
        //         {
        //             _light: { bg: 'primary.50' },
        //             _dark: { bg: 'primary.700' },
        //         }
        //     )
        // },

    },
    config: {
        // Changing initialColorMode to 'dark'
        // initialColorMode: 'dark',
    }
});

export default theme