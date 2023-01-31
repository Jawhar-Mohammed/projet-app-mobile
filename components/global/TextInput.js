import { TextInput as TI, StyleSheet } from "react-native";
import React from "react";

export default function TextInput({ onChangeText, placeholder }) {
	return (
		<TI
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor="lightgrey"
			onChangeText={onChangeText}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderColor: "lightgrey",
		width: "100%",
		borderWidth: 1,
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 17,
	},
});
