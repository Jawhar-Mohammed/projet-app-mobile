import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function DropDown({ list, placeholder }) {
	const [selected, setSelected] = useState("");
	const onChangeText = (val) => {
		setSelected(val);
	};
	return (
		<View>
			<SelectList
				setSelected={onChangeText}
				data={list}
				placeholder={placeholder}
				boxStyles={{
					borderRadius: 20,
					backgroundColor: "red",
					paddingVertical: 10,
					// height: 50,
				}}
				inputStyles={{}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
	},
});
