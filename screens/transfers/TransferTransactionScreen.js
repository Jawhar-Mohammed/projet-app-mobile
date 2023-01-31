import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { HeaderBack, BankCard, Button } from "../../components";
import { COLORS, METRICS, ROUTES } from "../../constants";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function TransferTransactionScreen({ route, navigation }) {
	const item = route.params;
	let textInput = useRef(null);
	const [amount, setAmount] = useState(0);
	const [message, setMessage] = useState("");
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={styles.container}>
				<HeaderBack title={"Vers " + item.name} />
				<View style={{ flex: 1 }}>
					{/* bank card */}
					<View style={styles.section1}>
						<Text style={[styles.title, { marginBottom: 15 }]}>From</Text>
						<BankCard rib={item.rib} amount={"32.312,12"} />
					</View>
					{/* amount */}
					<View style={styles.section2}>
						<Text style={[styles.title, { marginBottom: 15 }]}>Montant</Text>
						<TouchableOpacity
							style={[styles.miniContainer, { alignItems: "center" }]}
							onPress={() => textInput.focus()}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<TextInput
									ref={(input) => (textInput = input)}
									style={styles.textInput}
									keyboardType="numeric"
									onChangeText={(text) => setAmount(text.toString())}
									value={amount}
									placeholder={"0"}
								/>
								<Text
									style={{
										marginLeft: 7.5,
										color: COLORS.black,
										fontWeight: "700",
										fontSize: 17,
									}}
								>
									MAD
								</Text>
							</View>
							<Text style={{ color: COLORS.greyLight, marginTop: 5 }}>
								Aucune commission
							</Text>
						</TouchableOpacity>
					</View>
					{/* message */}
					<View style={styles.section3}>
						<Text style={[styles.title, { marginBottom: 15 }]}>
							Message (optionnel)
						</Text>
						<View style={styles.miniContainer}>
							<TextInput
								style={styles.message}
								onChangeText={setMessage}
								value={message}
								multiline={true}
								numberOfLines={3}
								minHeight={120}
							/>
						</View>
					</View>
				</View>

				<View
					style={{
						paddingHorizontal: METRICS.appDefaultHorizontalPadding,
						marginBottom: 10,
					}}
				>
					<Button
						title="Continuer"
						onPress={() =>
							navigation.push(ROUTES.TRANSFER_CONFIRMATION, {
								to: item.name,
								from: "MasterCard Premium",
								amount: amount,
								message: message,
							})
						}
					/>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section1: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	section2: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	section3: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	title: {
		fontSize: 16,
		color: COLORS.greyLight,
		fontWeight: "500",
	},
	miniContainer: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderColor: COLORS.greyLight,
		borderWidth: 1,
		borderRadius: 15,
	},
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	amount: { fontSize: 16, fontWeight: "500", marginLeft: 20, marginRight: 5 },
	textInput: { fontWeight: "700", fontSize: 17 },
	message: { fontWeight: "500", fontSize: 15 },
});
