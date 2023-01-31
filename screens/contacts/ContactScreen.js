import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Header, ListItem } from "../../components";
import { COLORS, METRICS } from "../../constants";

export default function ContactScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Header title="Contact Bank" />
			<View style={styles.body}>
				<Text style={styles.title}>Get Help</Text>
				<ListItem
					iconName="call-outline"
					iconType="ionicon"
					text="800-605-6000"
					description="Premium bank hotline 24/7, toll free"
				/>
				<ListItem
					iconName="room"
					iconType="material-icons"
					text="Bank officers search"
					description="Show nearset officers on map"
					isLink
				/>
				<ListItem
					iconName="headset-mic"
					iconType="material-icons"
					text="Support Chat"
					description="Live chat 24/7"
					isLink
				/>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	body: {
		flex: 1,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: 25,
	},
});
