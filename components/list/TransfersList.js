import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { COLORS, METRICS } from "../../constants";
import { TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/base";

export default function TransfersList() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<TouchableOpacity
					style={{
						paddingLeft: METRICS.appDefaultHorizontalPadding,
						marginRight: METRICS.appDefaultHorizontalPadding,
						alignSelf: "center",
					}}
				>
					<Avatar
						size={30}
						rounded
						icon={{ name: "plus", type: "ant-design" }}
						containerStyle={{
							backgroundColor: "transparent",
							borderColor: COLORS.white,
							borderWidth: 1,
						}}
					/>
				</TouchableOpacity>
				{Array(10)
					.fill()
					.map((data, index) => (
						<TouchableOpacity
							style={{
								marginRight: 10,
								alignItems: "center",
							}}
							key={index}
						>
							<Avatar
								size={50}
								rounded
								source={{
									uri: `https://randomuser.me/api/portraits/men/${index}.jpg`,
								}}
							/>
							<Text style={styles.beneficiaryName}>Naommy</Text>
						</TouchableOpacity>
					))}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingBottom: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	beneficiaryName: {
		color: COLORS.white,
		fontSize: 11,
	},
});
