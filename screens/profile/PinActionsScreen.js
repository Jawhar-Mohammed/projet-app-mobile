import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";
import { HeaderBack, ListItem, Tabs } from "../../components";
import { pinCodeSettingsList } from "../../data/ProfileData";

export default function PinActionsScreen({ route, navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="PIN-code menu" />
			<View style={styles.section}>
				{pinCodeSettingsList.map((item, index) => (
					<ListItem
						key={index}
						iconName={item.iconName}
						iconType={item.iconType}
						text={item.text}
						description={item.description}
						isLink={item.isLink}
						to={item.to}
						end={item.end}
					/>
				))}
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
});
