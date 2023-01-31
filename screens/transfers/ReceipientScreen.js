import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { COLORS, METRICS } from "../../constants";
import { HeaderBack, RecipientItem, TextInput } from "../../components";
import Tabs from "../../components/global/Tabs";
import { recipientData, recipientTabsList } from "../../data/TransferData";

export default function ReceipientScreen({ navigation }) {
	const [activeTab, setActiveTab] = useState("Tous");
	const [inputText, setInputText] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Sélectionnez le destinataire" />
			<View style={styles.section1}>
				<Tabs
					list={recipientTabsList}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TextInput placeholder="Nom du destinataire" onChangeText={(text) => setInputText(text.toLowerCase())} />
			</View>
			<ScrollView
				style={styles.section2}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>
				{recipientData
					.filter(
						(item) =>
							item.name.toLowerCase().includes(inputText) || inputText === ""
					)
					.map((item, index) => (
						<RecipientItem item={item} key={index} index={index} />
					))}
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
		marginTop: METRICS.appDefaultHorizontalPadding,
	},
});
