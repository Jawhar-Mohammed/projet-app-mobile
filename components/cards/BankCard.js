import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants";

export default function BankCard({ rib, amount }) {
	const [isSelected, setIsSelected] = useState(false);
	return (
		<TouchableOpacity
			style={
				isSelected
					? [styles.selectedContainer, styles.basecontainer]
					: [styles.unSelectedContainer, styles.basecontainer]
			}
			onPress={() => setIsSelected(!isSelected)}
		>
			<Fontisto
				name="mastercard"
				size={22}
				color={isSelected ? COLORS.white : COLORS.orange}
			/>
			<View style={{ marginLeft: 15 }}>
				<Text
					style={[
						styles.title,
						{
							color: isSelected ? COLORS.white : COLORS.black,
							marginBottom: 5,
						},
					]}
				>
					MasterCard Premium
				</Text>
				<Text
					style={[
						{
							color: isSelected ? COLORS.white : COLORS.black,
							marginBottom: 5,
						},
					]}
				>
					{rib.substring(0, 6) + "..."}
				</Text>
			</View>
			<View style={[styles.flexContainer]}>
				<Text
					style={{
						fontSize: 16,
						fontWeight: "500",
						marginLeft: 20,
						marginRight: 5,
						color: isSelected ? COLORS.white : COLORS.black,
					}}
				>
					${amount}
				</Text>
				<AntDesign
					name="right"
					size={16}
					color={isSelected ? COLORS.white : COLORS.black}
				/>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		color: COLORS.greyLight,
		fontWeight: "500",
	},
	basecontainer: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	selectedContainer: {
		borderColor: COLORS.orange,
		borderWidth: 1,
		backgroundColor: COLORS.orange,
		color: COLORS.white,
	},
	unSelectedContainer: {
		borderColor: COLORS.greyLight,
		borderWidth: 1,
		backgroundColor: COLORS.white,
	},
	selectedcontainer: {},
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});
