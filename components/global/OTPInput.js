import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, Keyboard } from "react-native";
import { COLORS, METRICS } from "../../constants";

export default function OTPInput({ pin, setPin, autofocus, maxLength }) {
	let textInput = useRef(null);

	const onChangeText = (val) => {
		setPin(val);
		if (val.length == maxLength) {
			Keyboard.dismiss();
		}
	};
	useEffect(() => {
		if (autofocus) {
			textInput.focus();
		}
	}, []);

	return (
		<View style={styles.OTPInputContainer}>
			<TextInput
				ref={(input) => (textInput = input)}
				onChangeText={onChangeText}
				style={styles.otpStyle}
				value={pin}
				maxLength={maxLength}
				returnKeyType="done"
				keyboardType="numeric"
			/>
			<TouchableOpacity
				style={styles.containerInput}
				onPress={() => textInput.focus()}
			>
				{Array(maxLength)
					.fill()
					.map((data, index) => (
						<View
							style={[
								styles.cellView,
								{
									borderBottomColor:
										index === pin.length ? COLORS.orange : COLORS.brown,
								},
							]}
							key={index}
						>
							<Text style={styles.cellText}>
								{pin && pin.length > 0 ? pin[index] : ""}
							</Text>
						</View>
					))}
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	containerAvoidingView: {},
	otpStyle: {
		width: 0,
		height: 0,
		backgroundColor: "green",
	},
	containerInput: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	emptyBullet: {},
	filledBullet: {},
	cellView: {
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1.5,
		width: 40,
		margin: 5,
		paddingVertical: 11,
	},
	cellText: {
		textAlign: "center",
		fontSize: 16,
	},
	bottomview: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 50,
		alignItems: "center",
	},
});
