import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, IMAGES, METRICS, ROUTES } from "../../constants";
import { Avatar } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, subTitle, bc }) {
	const navigation = useNavigation();

	return (
		<View
			style={[
				styles.headerContainer,
				{ backgroundColor: bc ? bc : COLORS.white },
			]}
		>
			<TouchableOpacity
				style={styles.profileSection}
				onPress={() => navigation.push(ROUTES.PROFILE)}
			>
				<Avatar size={32} rounded source={IMAGES.profileImage} />
			</TouchableOpacity>
			<View style={styles.titleSection}>
				<Text
					style={{ fontWeight: "600", color: bc ? COLORS.white : COLORS.black }}
				>
					{title}
				</Text>
				{subTitle && (
					<Text
						style={{
							color: COLORS.greyLight,
						}}
					>
						{subTitle}
					</Text>
				)}
			</View>
			<View style={styles.notificationSection}>
				<MaterialCommunityIcons
					name="bell-outline"
					size={22}
					color={bc ? COLORS.white : COLORS.black}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,

		marginTop: 10,
		height: 45,
	},
	profileSection: { flex: 1, alignItems: "flex-start" },
	titleSection: { flex: 2, alignItems: "center" },
	notificationSection: { flex: 1, alignItems: "flex-end" },
});
