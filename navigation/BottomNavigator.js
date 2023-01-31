import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, ROUTES } from "../constants";
import { AnalyticsScreen, ContactScreen, HomeScreen, TransferScreen } from "../screens";


// export default function BottomNavigator() {
// 	const Tab = createBottomTabNavigator();
// 	return (
// 		<Tab.Navigator
// 			screenOptions={({ route }) => ({
// 				headerShown: false,
// 				tabBarShowLabel: false,
// 				tabBarInactiveTintColor: COLORS.brown,
// 				tabBarActiveTintColor: COLORS.orange,
// 				tabBarIcon: ({ focused, color, size }) => {
// 					let iconName;
// 					if (route.name === ROUTES.HOME_TAB) {
// 						iconName = focused ? "ios-home-sharp" : "ios-home-outline";
// 						return <Ionicons name={iconName} size={22} color={color} />;
// 					} else if (route.name === ROUTES.TRANSFER_TAB) {
// 						iconName = focused ? "ios-card" : "ios-card-outline";
// 						return <Ionicons name={iconName} size={22} color={color} />;
// 					} else if (route.name === ROUTES.ANALYTICS_TAB) {
// 						iconName = focused ? "pie-chart-sharp" : "ios-pie-chart-outline";
// 						return <Ionicons name={iconName} size={22} color={color} />;
// 					} else if (route.name === ROUTES.CONTACT_TAB) {
// 						iconName = focused ? "message" : "message-outline";
// 						return (
// 							<MaterialCommunityIcons name={iconName} size={22} color={color} />
// 						);
// 					}
// 				},
// 			})}
// 		>
// 			<Tab.Screen name={ROUTES.HOME_TAB} component={HomeNavigator} />
// 			<Tab.Screen name={ROUTES.TRANSFER_TAB} component={TransferNavigator} />
// 			<Tab.Screen name={ROUTES.ANALYTICS_TAB} component={AnalyticsNavigator} />
// 			<Tab.Screen name={ROUTES.CONTACT_TAB} component={ContactNavigator} />
// 		</Tab.Navigator>
// 	);
// }

export default function BottomNavigator() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarInactiveTintColor: COLORS.brown,
				tabBarActiveTintColor: COLORS.orange,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === ROUTES.HOME) {
						iconName = focused ? "ios-home-sharp" : "ios-home-outline";
						return <Ionicons name={iconName} size={22} color={color} />;
					} else if (route.name === ROUTES.TRANSFER) {
						iconName = focused ? "ios-card" : "ios-card-outline";
						return <Ionicons name={iconName} size={22} color={color} />;
					} else if (route.name === ROUTES.ANALYTICS) {
						iconName = focused ? "pie-chart-sharp" : "ios-pie-chart-outline";
						return <Ionicons name={iconName} size={22} color={color} />;
					} else if (route.name === ROUTES.CONTACT) {
						iconName = focused ? "message" : "message-outline";
						return (
							<MaterialCommunityIcons name={iconName} size={22} color={color} />
						);
					}
				},
			})}
		>
			<Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
			<Tab.Screen name={ROUTES.TRANSFER} component={TransferScreen} />
			<Tab.Screen name={ROUTES.ANALYTICS} component={AnalyticsScreen} />
			<Tab.Screen name={ROUTES.CONTACT} component={ContactScreen} />
		</Tab.Navigator>
	);
}
