import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function DepositAccountCard({ edge, item }) {
	const { accountName, accountType, amount, iconName, iconType, color, to } =
		item;
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={styles.baseContainer} onPress={() => {}}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Avatar
					size={35}
					rounded
					icon={{
						name: iconName,
						type: iconType,
						color: COLORS.orange,
					}}
					containerStyle={{
						backgroundColor: "#FFF",
						marginRight: 15,
					}}
				/>
				<View>
					<Text style={styles.title}>{accountName}</Text>
					<Text style={styles.subTitle}>{accountType}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.amount}>${amount}</Text>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	title: {
		fontSize: 15,
		fontWeight: "600",
	},
	amount: {
		fontSize: 17,
		fontWeight: "600",
	},
	subTitle: {
		fontSize: 12,
		color: COLORS.greyLight,
		fontWeight: "500",
		marginTop: 5,
	},
	baseContainer: {
		// backgroundColor: "red",
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});
