import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";
import { Header, ListItem, TransfersList } from "../../components";
import { paymentList, transferList } from "../../data/TransferData";

export default function TransferScreen() {
	return (
		<View style={styles.container}>
			<Header title="Transferts et paiements" bc={COLORS.orange} />
			<View style={styles.body}>
				<TransfersList />
			</View>
			<ScrollView
				style={styles.body2}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>
				{/* Transfer section */}
				<Text style={styles.title}>Transfert</Text>
				{transferList.map((item, index) => (
					<ListItem
						key={index}
						iconName={item.iconName}
						iconType={item.iconType}
						text={item.text}
						description={item.description}
						isLink={item.isLink}
						to={item.to}
					/>
				))}
				{/* payment section */}
				<Text
					style={[
						styles.title,
						{ marginTop: METRICS.appDefaultHorizontalPadding },
					]}
				>
					Paiements
				</Text>
				{paymentList.map((item, index) => (
					<ListItem
						key={index}
						iconName={item.iconName}
						iconType={item.iconType}
						text={item.text}
						description={item.description}
						isLink={item.isLink}
					/>
				))}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.orange,
		paddingTop: 45,
	},
	body: {
		paddingTop: 10,
		backgroundColor: COLORS.orange,
	},
	body2: {
		flex: 1,
		backgroundColor: COLORS.white,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
		marginBottom: METRICS.appDefaultHorizontalPadding,
	},
});
