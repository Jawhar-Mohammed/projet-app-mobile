import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "@rneui/base";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Icon } from "@rneui/themed";

export default function TrustedDeviceItem({ item, isLast, onDelete }) {
	const { category, type, lastConnexion } = item;

	let iconName =
		category === "mobile"
			? "mobile-alt"
			: category === "laptop"
			? "laptop"
			: "tablet";
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Avatar
					size={35}
					rounded
					icon={{
						name: iconName,
						type: "fontisto",
						color: COLORS.orange,
					}}
					containerStyle={{
						backgroundColor: "#F7F7FC",
					}}
				/>
			</View>
			<View
				style={
					isLast
						? [styles.contentContainer]
						: [styles.contentContainer, styles.underline]
				}
			>
				<View>
					<Text style={styles.title}>{type}</Text>
					<Text style={styles.description}>{lastConnexion}</Text>
				</View>
				<TouchableOpacity style={styles.linkContainer} onPress={onDelete}>
					<Icon
						reverse
						name="delete"
						type="material"
						color={COLORS.orange}
						size={15}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	iconContainer: {
		flex: 1,
		borderRadius: 20,
		paddingVertical: 10,
		marginRight: 10,
	},
	contentContainer: {
		flex: 8,
		flexDirection: "row",
		alignItems: "center",

		paddingVertical: 10,
		marginLeft: 10,
	},
	underline: { borderBottomWidth: 1, borderBottomColor: COLORS.bgColor },
	linkContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	title: { fontWeight: "600", marginBottom: 5 },
	description: { color: COLORS.gray },
});
