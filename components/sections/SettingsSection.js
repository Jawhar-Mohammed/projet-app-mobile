import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ListItem } from "../../components";
import { COLORS, METRICS } from "../../constants";
import { settingsList } from "../../data/ProfileData";
import { useNavigation } from "@react-navigation/native";

export default function SettingsSection() {
	const navigation = useNavigation();
	return (
		<View style={styles.body}>
			<Text style={styles.title}>Vos réglages</Text>
			{settingsList.map((item, index) => (
				<ListItem
					key={index}
					iconName={item.iconName}
					iconType={item.iconType}
					text={item.text}
					description={item.description}
					isLink={item.isLink}
					end={true}
					to={item.to}
				/>
			))}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	body: {
		// paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		// paddingTop: METRICS.appDefaultHorizontalPadding,
		// // backgroundColor: "red",
		// flex: 1,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: 25,
	},
});
