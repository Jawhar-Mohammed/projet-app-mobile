import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";

export default function Tabs({ list, activeTab, setActiveTab }) {
	return (
		<View style={styles.container}>
			{list.map((item, index) => (
				<HeaderButton
					key={index}
					text={item.text}
					btnColor={item.btnColor}
					textColor={item.textColor}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			))}
		</View>
	);
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
	<TouchableOpacity
		style={{
			backgroundColor: activeTab === text ? COLORS.orange : COLORS.transparent,
			paddingVertical: 6,
			paddingHorizontal: 16,
			borderRadius: 20,
		}}
		onPress={() => setActiveTab(text)}
	>
		<Text
			style={{
				color: activeTab === text ? COLORS.white : COLORS.black,
				fontSize: 12,
				fontWeight: "500",
			}}
		>
			{text}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignSelf: "center",
		backgroundColor: "#EFF0F5",
		padding: 7,
		borderRadius: 20,
		marginBottom: METRICS.appDefaultHorizontalPadding,
	},
});
