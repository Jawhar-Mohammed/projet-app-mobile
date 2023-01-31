import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { Avatar } from "@rneui/themed";

export default function HomeActions() {
	return (
		<View style={styles.container}>
			<HomeAction iconName="send" iconType="feather" text="Envoyer" to="" />
			<HomeAction
				iconName="hand-holding-usd"
				iconType="font-awesome-5"
				text="Demander"
				to=""
			/>
			<HomeAction
				iconName="qrcode-scan"
				iconType="material-community"
				text="Scan"
				to=""
			/>
			<HomeAction
				iconName="attach-money"
				iconType="material-icon"
				text="Devise"
				to=""
			/>
		</View>
	);
}

const HomeAction = ({ iconName, iconType, text, to }) => {
	return (
		<TouchableOpacity
			style={{
				marginRight: 10,
				alignItems: "center",
			}}
			onPress={() => {}}
		>
			<Avatar
				size={45}
				rounded
				icon={{
					name: iconName,
					type: iconType,
					color: COLORS.orange,
				}}
				containerStyle={{
					backgroundColor: "#F7F7FC",
				}}
			/>
			<Text style={styles.beneficiaryName}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		// paddingTop: 10,
		paddingBottom: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	beneficiaryName: {
		color: COLORS.white,
		fontSize: 13,
		marginTop: 6,
	},
});
