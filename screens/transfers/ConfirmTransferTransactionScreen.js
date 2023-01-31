import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, METRICS, ROUTES } from "../../constants";
import { Button, HeaderBack, ListItem1 } from "../../components";

export default function ConfirmTransferTransactionScreen({
	route,
	navigation,
}) {
	const { from, to, amount, message } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Confirmez la transaction" />
			<View style={styles.body}>
				<Text style={styles.title}>Vérifiez les détails de la transaction</Text>
				<ListItem1
					iconName="call-outline"
					iconType="ionicon"
					text="Transférer depuis"
					description={from}
				/>
				<ListItem1
					iconName="call-outline"
					iconType="ionicon"
					text="Transférer vers"
					description={to}
				/>
				<ListItem1
					iconName="call-outline"
					iconType="ionicon"
					text="Montant"
					description={amount + " MAD"}
				/>
				<ListItem1
					iconName="call-outline"
					iconType="ionicon"
					text="Message"
					description={message}
					isMultiline
				/>
			</View>

			<View
				style={{
					marginHorizontal: METRICS.appDefaultHorizontalPadding,
					marginBottom: 10,
				}}
			>
				<Button
					title="Continuer"
					onPress={() =>
						navigation.push(ROUTES.PIN_VERIFY, {
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
	},
	body: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
		flex: 1,
	},
});
