import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, HeaderBack, OTPInput } from "../../components";
import { COLORS, METRICS, ROUTES } from "../../constants";

export default function PinEnrollScreen({ navigation: { push } }) {
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const isDisabled = pin1 === "" || pin2 === "" || pin1 != pin2;
	const handleSubmit = () => {
		push(ROUTES.SMS);
	};
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Enrôllement d'appareil" />
			<View style={styles.section}>
				<Text style={[styles.title, { marginTop: 40 }]}>Entrez PIN-code</Text>
				<OTPInput
					pin={pin1}
					setPin={setPin1}
					autofocus
					maxLength={METRICS.pinLength}
				/>
				<Text style={[styles.title, { marginTop: 100 }]}>
					Confirmez PIN-code
				</Text>
				<OTPInput pin={pin2} setPin={setPin2} maxLength={METRICS.pinLength} />
			</View>
			<View
				style={{
					marginHorizontal: METRICS.appDefaultHorizontalPadding,
					marginBottom: 10,
				}}
			>
				<Button
					disabled={isDisabled}
					title="Continuer"
					onPress={handleSubmit}
				/>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section: {
		flex: 1,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
		alignItems: "center",
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: 25,
	},
});
