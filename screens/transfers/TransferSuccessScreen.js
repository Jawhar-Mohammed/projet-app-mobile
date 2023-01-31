import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, METRICS, ROUTES } from "../../constants";
import { Button } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Avatar } from "@rneui/base";
import { Icon } from "@rneui/themed";
export default function TransferSuccessScreen({ route, navigation }) {
	const { to, amount } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.body}>
				<Icon
					solid
					name="book-check-outline"
					type="material-community"
					color={COLORS.orange}
					size={80}
					containerStyle={{
						backgroundColor: COLORS.orangeLight,
						borderRadius: 100,
						padding: METRICS.appDefaultHorizontalPadding,
						marginBottom: METRICS.appDefaultHorizontalPadding,
					}}
				/>
				<Text style={[styles.title, styles.textCenter]}>
					${amount},00 MAD envoyé
				</Text>

				<Text style={[styles.textCenter, styles.text1]}>
					Le transfert a été effectué avec succès vers
				</Text>
				<Text style={[styles.textCenter, styles.text2]}>{to}</Text>
				<TouchableOpacity
					onPress={() => {}}
					style={[
						{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							marginTop: METRICS.appDefaultHorizontalPadding * 2,
						},
					]}
				>
					<Avatar
						size={35}
						rounded
						icon={{
							name: "filetext1",
							type: "antdesign",
							color: COLORS.orange,
						}}
						containerStyle={{
							backgroundColor: "#F7F7FC",
						}}
					/>
					<Text style={[styles.textCenter, styles.text3]}>Obtenir un reçu</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					marginHorizontal: METRICS.appDefaultHorizontalPadding,
					marginBottom: 10,
				}}
			>
				<Button
					title="Continuer"
					onPress={() => navigation.navigate(ROUTES.TRANSFER)}
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
	textCenter: { textAlign: "center" },
	title: {
		fontSize: 25,
		fontWeight: "600",
		marginVertical: 25,
	},
	text1: {
		fontSize: 17,
		fontWeight: "400",
		marginBottom: 5,
	},
	text2: {
		fontSize: 25,
		fontWeight: "600",
	},
	text3: {
		fontSize: 17,
		fontWeight: "600",
		color: COLORS.orange,
	},
	body: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding * 4.1,
	},
});
