import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

export default function ListItem1({
	iconName,
	iconType,
	text,
	description,
	isLink,
	isMultiline,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Avatar
					size={35}
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
			</View>
			<View style={styles.contentContainer}>
				<View>
					<Text style={styles.title}>{text}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				{isLink && (
					<View style={styles.linkContainer}>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={25}
							color={COLORS.brown}
						/>
					</View>
				)}
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
	linkContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	title: { fontWeight: "600", marginBottom: 5 },
	description: { color: COLORS.gray },
});
