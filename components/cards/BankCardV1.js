import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { Icon } from "@rneui/themed";

export default function BankCardV1({ item, edge }) {
	const { cardName, rib, amount } = item;
	return (
		<TouchableOpacity style={styles.baseContainer} onPress={() => {}}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Icon
					reverse
					name={item.iconName}
					type={item.iconType}
					color={item.color}
					size={13}
					containerStyle={{ marginRight: 15 }}
				/>
				<View>
					<Text style={styles.title}>{cardName}</Text>
					<Text style={styles.subTitle}>**** {rib.substring(0, 4)}</Text>
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
	},amount: {
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
