import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, HeaderBack } from "../../components";
import { COLORS, METRICS, ROUTES } from "../../constants";
import OTPInput from "../../components/global/OTPInput";

export default function VerifyPinScreen({ route, navigation }) {
	const { to, amount } = route.params;
	const [pin, setPin] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Vérification du Pin" />
			<View style={styles.body}>
				<Text style={styles.title}>Entrez votre code Pin</Text>
				<OTPInput
					pin={pin}
					setPin={setPin}
					autofocus
					maxLength={METRICS.pinLength}
				/>
				<Text style={styles.forgot}>Code oublié?</Text>
			</View>

			<View
				style={{
					marginHorizontal: METRICS.appDefaultHorizontalPadding,
					marginBottom: 10,
				}}
			>
				<Button
					title="Soumettre et envoyer"
					onPress={() =>
						navigation.push(ROUTES.TRANSFER_SUCCESS, {
							to: to,
							amount: amount,
						})
					}
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
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: 25,
		textAlign: "center",
		marginTop: 35,
	},
	body: {
		flex: 1,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	forgot: {
		fontSize: 17,
		marginTop: 35,
		textAlign: "center",
		fontWeight: "500",
		color: "#296BEB",
	},
});
