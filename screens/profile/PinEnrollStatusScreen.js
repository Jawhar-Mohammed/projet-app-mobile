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
import { Avatar } from "@rneui/base";
import { Icon } from "@rneui/themed";

export default function PinEnrollStatusScreen({ navigation: { navigate } }) {
	const handleSubmit = () => {
		navigate(ROUTES.PIN_MENU);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.body}>
				<Icon
					solid
					name="ios-trophy"
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
				<Text style={[styles.title, styles.textCenter]}>
					Iphone 11 Pro Max Enrôllé
				</Text>

				<Text style={[styles.textCenter, styles.text1]}>
					Cet appareil est desormais parmi les
				</Text>
				<Text style={[styles.textCenter, styles.text2]}>
					appareils de confiance
				</Text>
			</View>

			<View
				style={{
					marginHorizontal: METRICS.appDefaultHorizontalPadding,
					marginBottom: 10,
				}}
			>
				<Button title="Fin" onPress={handleSubmit} />
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
		paddingTop: METRICS.appDefaultHorizontalPadding * 6.1,
	},
});
