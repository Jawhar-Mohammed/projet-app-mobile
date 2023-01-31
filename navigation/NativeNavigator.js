import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AnalyticsScreen,
	ConfirmTransferTransactionScreen,
	ContactScreen,
	HomeScreen,
	NotificationsScreen,
	PinActionsScreen,
	PinEnrollScreen,
	PinEnrollStatusScreen,
	PinModificationScreen,
	ProfileScreen,
	ReceipientScreen,
	SmsScreen,
	TransferScreen,
	TransferSuccessScreen,
	TransferTransactionScreen,
	TrustedDevicesScreen,
	VerifyPinScreen,
} from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomNavigator from "./BottomNavigator";

export function MainNavigator() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName={ROUTES.LOGIN}
			screenOptions={{ headerShown: false }}
		>
			{/* home */}
			<Stack.Screen name={ROUTES.HOME_TAB} component={BottomNavigator} />
			{/* transfer */}
			<Stack.Screen
				name={ROUTES.TRANSFER_RECEIPIENT}
				component={ReceipientScreen}
			/>
			<Stack.Screen
				name={ROUTES.TRANSFER_TRANSACTION}
				component={TransferTransactionScreen}
			/>
			<Stack.Screen
				name={ROUTES.TRANSFER_CONFIRMATION}
				component={ConfirmTransferTransactionScreen}
			/>
			<Stack.Screen
				name={ROUTES.TRANSFER_SUCCESS}
				component={TransferSuccessScreen}
			/>
			{/* pin */}
			<Stack.Screen name={ROUTES.PIN_VERIFY} component={VerifyPinScreen} />
			<Stack.Screen name={ROUTES.PIN_MENU} component={PinActionsScreen} />
			<Stack.Screen name={ROUTES.PIN_ENROLL} component={PinEnrollScreen} />
			<Stack.Screen
				name={ROUTES.PIN_STATUS}
				component={PinEnrollStatusScreen}
			/>
			<Stack.Screen
				name={ROUTES.PIN_MODIFY}
				component={PinModificationScreen}
			/>
			<Stack.Screen
				name={ROUTES.DEVICES_LIST}
				component={TrustedDevicesScreen}
			/>
			{/* ANALYTICS */}
			<Stack.Screen name={ROUTES.ANALYTICS} component={AnalyticsScreen} />
			{/* CONTACT */}
			<Stack.Screen name={ROUTES.CONTACT} component={ContactScreen} />
			{/* PROFILE */}
			<Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
			{/* NOTIFICATIONS */}
			<Stack.Screen
				name={ROUTES.NOTIFICATIONS}
				component={NotificationsScreen}
			/>
			{/* GLOBAL */}
			<Stack.Screen name={ROUTES.SMS} component={SmsScreen} />
		</Stack.Navigator>
	);
}

// export function HomeNavigator() {
// 	const HomeStack = createNativeStackNavigator();
// 	return (
// 		<HomeStack.Navigator
// 			initialRouteName={ROUTES.LOGIN}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<HomeStack.Screen name={ROUTES.HOME} component={HomeScreen} />
// 		</HomeStack.Navigator>
// 	);
// }

// export function TransferNavigator() {
// 	const TransferStack = createNativeStackNavigator();
// 	return (
// 		<TransferStack.Navigator
// 			initialRouteName={ROUTES.TRANSFER}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<TransferStack.Screen name={ROUTES.TRANSFER} component={TransferScreen} />
// 			<TransferStack.Screen
// 				name={ROUTES.TRANSFER_RECEIPIENT}
// 				component={ReceipientScreen}
// 			/>
// 			<TransferStack.Screen
// 				name={ROUTES.TRANSFER_TRANSACTION}
// 				component={TransferTransactionScreen}
// 			/>
// 			<TransferStack.Screen
// 				name={ROUTES.TRANSFER_CONFIRMATION}
// 				component={ConfirmTransferTransactionScreen}
// 			/>
// 			<TransferStack.Screen
// 				name={ROUTES.TRANSFER_SUCCESS}
// 				component={TransferSuccessScreen}
// 			/>
// 		</TransferStack.Navigator>
// 	);
// }

// export function AnalyticsNavigator() {
// 	const AnalyticsStack = createNativeStackNavigator();
// 	return (
// 		<AnalyticsStack.Navigator
// 			initialRouteName={ROUTES.LOGIN}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<AnalyticsStack.Screen
// 				name={ROUTES.ANALYTICS}
// 				component={AnalyticsScreen}
// 			/>
// 		</AnalyticsStack.Navigator>
// 	);
// }

// export function ContactNavigator() {
// 	const ContactStack = createNativeStackNavigator();
// 	return (
// 		<ContactStack.Navigator
// 			initialRouteName={ROUTES.LOGIN}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<ContactStack.Screen name={ROUTES.CONTACT} component={ContactScreen} />
// 		</ContactStack.Navigator>
// 	);
// }

// export function ProfileNavigator() {
// 	const ProfileStack = createNativeStackNavigator();
// 	return (
// 		<ProfileStack.Navigator
// 			initialRouteName={ROUTES.PROFILE}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<ProfileStack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
// 		</ProfileStack.Navigator>
// 	);
// }

// export function NotificationsNavigator() {
// 	const NotificationsStack = createNativeStackNavigator();
// 	return (
// 		<NotificationsStack.Navigator
// 			initialRouteName={ROUTES.NOTIFICATIONS}
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<NotificationsStack.Screen
// 				name={ROUTES.NOTIFICATIONS}
// 				component={NotificationsScreen}
// 			/>
// 		</NotificationsStack.Navigator>
// 	);
// }
