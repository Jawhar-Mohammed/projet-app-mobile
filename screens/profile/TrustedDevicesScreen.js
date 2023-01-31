import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";
import { HeaderBack, ListItem, TrustedDeviceItem } from "../../components";
import { deviceList } from "../../data/ProfileData";
import { useState } from "react";

export default function TrustedDevicesScreen({
	route,
	navigation: { goBack },
}) {
	const [list, setList] = useState(deviceList.devices);
	const onDelete = (name) => {
		setList((current) => current.filter((device) => device.name != name));
	};

	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Mes appareils de confiance" />
			<View style={styles.body}>
				<Text style={styles.title}>Get Help</Text>
				{list.map((item, index) => (
					<TrustedDeviceItem
						key={index}
						item={item}
						isLast={list.length === index + 1}
						onDelete={() => onDelete(item.name)}
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
