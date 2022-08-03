import { StyleSheet } from "react-native";

exports.styles = StyleSheet.create({
	modal : {justifyContent: 'center', alignItems: 'center'},
	modalBody: {
		backgroundColor: "#000000AA",
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		width: "100%"
	},
	listContainer: {
		width: "80%",
		backgroundColor: "#ffffff",
		borderRadius: 5,
		borderColor: "lightgray",
		maxHeight: "60%",
		padding: 5,
	},
	closeButton: {
		marginTop: 5,
		backgroundColor: "#ffffff",
		borderRadius: 5,
		height: 60,
		width: "80%",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	modalItem: {
		fontSize: 15,
		textAlign: "center",
		color: "darkblue",
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "gray",
	},
	searchInput: {
		color: "black",
		padding : 10
	},
	noResultsText : {
		alignSelf : "center",
		padding : 10
	}
});
