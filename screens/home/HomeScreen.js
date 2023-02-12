import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";
import {
	BankCardV1,
	DepositAccountCard,
	Header,
	HomeActions,
	ListItem,
} from "../../components";
import { Icon } from "@rneui/themed";
import { accountList, cardList } from "../../data/HomeData";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Header title="Bonjour M JAWHAR" bc={COLORS.orange} />
			<View style={styles.body}>
				<HomeActions />
			</View>
			<ScrollView
				style={styles.body2}
				horizontal={false}
				showsVerticalScrollIndicator={false}
			>
				{/* cards section */}
				<HomeHeader title="Mes cartes" open />
				<View style={{ backgroundColor: "#F9F9FC", borderRadius: 15 }}>
					{cardList.map((item, index) => (
						<BankCardV1
							edge={index === 0 || index + 1 === cardList.length}
							item={item}
							key={index}
						/>
					))}
				</View>
				{/* accounts section */}
				<HomeHeader title="Mes comptes" open />
				<View style={{ backgroundColor: "#F9F9FC", borderRadius: 15 }}>
					{accountList.map((item, index) => (
						<DepositAccountCard
							edge={index === 0 || index + 1 === cardList.length}
							item={item}
							key={index}
						/>
					))}
				</View>
				{/* credits section */}
				<HomeHeader title="Crédits" />
				<View
					style={{
						backgroundColor: "#F9F9FC",
						borderRadius: 15,
						paddingHorizontal: 15,
					}}
				>
					<ListItem
						iconName="credit-card-check"
						iconType="material-community"
						text="Calculez et prendre un crédit"
						description="Simulez un crédit"
						isLink
						end
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const HomeHeader = ({ title, open }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				marginVertical: 15,
				paddingVertical: 10,
			}}
		>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			{open && (
				<TouchableOpacity onPress={() => {}} style={styles.flexContainer}>
					<Icon
						name="plus"
						type="entypo"
						color={COLORS.orange}
						size={15}
						containerStyle={{ marginRight: 5 }}
					/>
					<Text style={styles.addTitle}>Ouvrir maintenant</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.orange,
		paddingTop: 45,
	},

	body: {
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
		paddingTop: METRICS.appDefaultHorizontalPadding,
		backgroundColor: COLORS.orange,
	},
	body2: {
		flex: 1,
		backgroundColor: COLORS.white,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: METRICS.appDefaultHorizontalPadding,
	},
	title: {
		fontSize: 17,
		fontWeight: "500",
	},
	flexContainer: { flexDirection: "row", alignItems: "center" },
	addTitle: { fontWeight: "500", color: COLORS.orange },
});
