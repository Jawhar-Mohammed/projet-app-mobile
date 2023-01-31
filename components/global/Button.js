import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

export default function Button({ onPress, title, disabled }) {
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={!disabled ? styles.activated : styles.disactivated}
		>
			<Text style={styles.appButtonText}>{title}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		justifyContent: "center",
		padding: 16,
	},
	activated: {
		elevation: 8,
		backgroundColor: COLORS.orange,
		borderRadius: 10,
		paddingVertical: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	disactivated: {
		elevation: 8,
		backgroundColor: COLORS.greyLight,
		borderRadius: 10,
		paddingVertical: 15,
	},
	appButtonText: {
		fontSize: 16,
		color: "#fff",
		alignSelf: "center",
	},
});
