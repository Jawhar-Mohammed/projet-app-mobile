import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, IMAGES } from "../../constants";
import ListItem from "../../components/list/ListItem";
import { profileList } from "../../data/ProfileData";

export default function ProfileSection() {
	return (
		<View style={styles.container}>
			{/* IMAGE */}
			<View style={styles.section1}>
				<View style={styles.imageContainer}>
					<Image source={IMAGES.profileImage} style={styles.image} />
				</View>
				<Text style={styles.name}>JAWHAR Mohammed</Text>
			</View>
			{profileList.map((item, index) => (
				<ListItem
					iconName={item.iconName}
					iconType={item.iconType}
					text={item.text}
					description={item.description}
					isLink={item.isLink}
					isLast={profileList.length === index + 1}
				/>
			))}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
	},
	section1: {
		alignItems: "center",
	},
	imageContainer: {
		padding: 7,
		borderRadius: 150,
		backgroundColor: COLORS.greyLighter,
	},
	image: {
		borderRadius: 150,
		width: 150,
		height: 150,

		resizeMode: "contain",
	},
	name: {
		fontSize: 17,
		fontWeight: "500",
		marginVertical: 25,
	},
});
