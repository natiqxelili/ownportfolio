module.exports = {
	prefix: "tw-",
	important: true,
	theme: {
		extend: {
			height: {
				22: "5.55rem",
				"9rem": "9rem",
				"10rem": "10rem",
				"11rem": "11rem",
				"12rem": "12rem",
				"13rem": "13rem",
				"14rem": "14rem",
				"15rem": "15rem",
				"16rem": "16rem",
				"17rem": "17rem",
				"18rem": "18rem",
				"19rem": "19rem",
				"20rem": "20rem",
				"21rem": "21rem",
				"22rem": "22rem",
				"23rem": "23rem",
				"24rem": "24rem",
				"25rem": "25rem",
				"26rem": "26rem",
				"27rem": "27rem",
				"28rem": "28rem",
				"29rem": "29rem",
				"30rem": "30rem"
			},
			width: {
				"9rem": "9rem",
				"10rem": "10rem",
				"11rem": "11rem",
				"12rem": "12rem",
				"13rem": "13rem",
				"14rem": "14rem",
				"15rem": "15rem",
				"16rem": "16rem",
				"17rem": "17rem",
				"18rem": "18rem",
				"19rem": "19rem",
				"20rem": "20rem",
				"21rem": "21rem",
				"22rem": "22rem",
				"23rem": "23rem",
				"24rem": "24rem",
				"25rem": "25rem",
				"26rem": "26rem",
				"27rem": "27rem",
				"28rem": "28rem",
				"29rem": "29rem",
				"30rem": "30rem"
			},
			backgroundColor: {
				"indigo-hover": "#575FAE",
				modaloverlayLight: "rgba(255, 255, 255, 0.8)",
				modaloverlayDark: "rgba(0, 0, 0, 0.7)",
				primary: "var(--bg-primary)",
				secondary: "var(--bg-secondary)",
				ternary: "var(--bg-ternary)"
			},
			textColor: {
				primary: "var(--text-primary)",
				secondary: "var(--text-secondary)",
				ternary: "var(--text-ternary)"
			},
			borderColor: {
				primary: "var(--border-primary)",
				secondary: "var(--border-secondary)",
				ternary: "var(--border-ternary)"
			},
			fontFamily: {
				"proxima-nova": "Proxima Nova, sans-serif",
				default: "Arial, sans-serif"
			},
			fontSize: {
				mini: "0.6rem"
			},
			margin: {
				22: "5.6rem"
			},
			inputColor: {
				primary: "var(--input-primary)"
			}
		}
	},
	variants: {},
	plugins: [
		function ({ addComponents }) {
			const rotate = {
				".rotate-90": {
					transform: "rotate(90deg)"
				},
				".rotate-270": {
					transform: "rotate(270deg)"
				}
			};
			const transform_origin = {
				".transform-origin-tl": {
					transformOrigin: "top left"
				},
				".transform-origin-tr": {
					transformOrigin: "top right"
				},
				".transform-origin-bl": {
					transformOrigin: "bottom left"
				},
				".transform-origin-br": {
					transformOrigin: "bottom right"
				}
			};

			addComponents(rotate);
			addComponents(transform_origin);
		}
	]
};
