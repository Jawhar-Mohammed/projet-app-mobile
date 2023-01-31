import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
	Header,
	HistorySection,
	FinanceAnalysisSection,
	Tabs,
	TextInput,
} from "../../components";
import { COLORS, METRICS } from "../../constants";
import { useState } from "react";
import { analyticsTabsList } from "../../data/AnalyticsData";
import { useEffect } from "react";

export default function AnalyticsScreen({ route, navigation: { push } }) {
	const [activeTab, setActiveTab] = useState("Analyse financière");
	const [inputText, setInputText] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Header title="Finance" />
			<View style={styles.section1}>
				<Tabs
					list={analyticsTabsList}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</View>

			<ScrollView
				style={styles.section2}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>
				{activeTab === "Analyse financière" && <FinanceAnalysisSection />}
				{activeTab === "Historique" && <HistorySection />}
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section1: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: 25,
	},
	section2: {
		flex: 1,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		marginTop: METRICS.HORIZONTAL_PADDING_10,
	},
});
