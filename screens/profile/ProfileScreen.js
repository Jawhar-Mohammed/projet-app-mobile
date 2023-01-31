import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
	CashBackSection,
	HeaderBack,
	InfoSection,
	ProfileSection,
	ServiceSection,
	SettingsSection,
	Tabs,
} from "../../components";
import { COLORS, METRICS } from "../../constants";
import { profileTabsList } from "../../data/ProfileData";

export default function ProfileScreen({ route, navigation }) {
	const [activeTab, setActiveTab] = useState("Profile");
	return (
		<SafeAreaView style={styles.container}>
			<HeaderBack title="Profile" />
			<View style={styles.section}>
				<Tabs
					list={profileTabsList}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{activeTab === "Profile" && <ProfileSection />}
				{activeTab === "Services" && <ServiceSection />}
				{activeTab === "Settings" && <SettingsSection />}
				{activeTab === "CashBack" && <CashBackSection />}
				{activeTab === "Info" && <InfoSection />}
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
