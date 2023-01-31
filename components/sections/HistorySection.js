import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DropDown from "../global/DropDown";
import { monthList } from "../../data/AnalyticsData";



export default function HistorySection() {
	return (
		<View style={styles.container}>
			<View style={styles.options}>
				<View style={{ flex: 3, marginRight: 20 }}>
					<DropDown list={monthList} placeholder="Mois" />
				</View>
				<View style={{ flex: 6 }}>
					<DropDown list={monthList} placeholder="Tous mes cartes" />
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	options: { flexDirection: "row" },
});
