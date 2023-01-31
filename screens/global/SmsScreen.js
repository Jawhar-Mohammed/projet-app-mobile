import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS, METRICS, ROUTES } from "../../constants";
import { Button, HeaderBack, OTPInput } from "../../components";
import { Icon } from "@rneui/themed";

export default function SmsScreen({ navigation: { push } }) {
	const [otp, setOTP] = useState("");
	const isDisabled = otp === "" || otp.length < METRICS.otpLength;
	const handleSubmit = () => {
		push(ROUTES.PIN_STATUS);
	};
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Enrôllement d'appareil" />
			<View style={styles.section}>
				<View style={{ alignItems: "center" }}>
					<Icon
						solid
						name="ios-shield-checkmark-sharp"
						type="ionicon"
						color={COLORS.orange}
						size={80}
						containerStyle={{
							backgroundColor: COLORS.orangeLight,
							borderRadius: 100,
							padding: METRICS.appDefaultHorizontalPadding,
							marginBottom: METRICS.appDefaultHorizontalPadding,
						}}
					/>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text style={styles.title}>Entez code sms</Text>
					<OTPInput
						pin={otp}
						setPin={setOTP}
						autofocus
						maxLength={METRICS.otpLength}
					/>
				</View>

				<View style={{ alignItems: "center", marginVertical: 30 }}>
					<Text
						style={{
							fontSize: 15,
							marginVertical: 20,
							textDecorationLine: "underline",
						}}
					>
						Resend SMS Code
					</Text>
				</View>
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
		alignItems: "center",
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding * 2.5,
	},
	title: {
		fontSize: 25,
		fontWeight: "600",
		marginVertical: 15,
	},
});
