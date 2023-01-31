import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, ROUTES } from "../../constants";
import { Avatar } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function RecipientItem({ item, index }) {
	const navigation = useNavigation();
	const [starActive, setStarActive] = useState(item.isFavorite);
	const toggleFavorite = () => setStarActive(!starActive);
	return (
		<View style={styles.container}>
			<View style={styles.favoriteContainer}>
				<TouchableOpacity
					onPress={toggleFavorite}
					style={[
						styles.favoriteContainer,
						{
							paddingHorizontal: 5,
							paddingVertical: 15,
							alignSelf: "center",
						},
					]}
				>
					<AntDesign
						name={starActive ? "star" : "staro"}
						size={20}
						color={starActive ? COLORS.orange : COLORS.black}
						raised
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate(ROUTES.TRANSFER_TRANSACTION, item)}
				style={styles.contentContainer}
			>
				<View style={styles.recipientAvatarContainer}>
					<Avatar
						size={40}
						rounded
						source={{
							uri: `https://randomuser.me/api/portraits/men/${index}.jpg`,
						}}
					/>
				</View>
				<View style={styles.recipientDetailsContainer}>
					<Text style={styles.title}>{item.name}</Text>
					<Text style={styles.rib}>{item.rib}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	favoriteContainer: {},
	contentContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		marginLeft: 20,
	},
	recipientAvatarContainer: {},
	recipientDetailsContainer: { marginLeft: 15 },
	title: { fontWeight: "600", marginBottom: 5 },
	rib: { color: COLORS.gray },
});
