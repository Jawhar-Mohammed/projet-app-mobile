
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import BottomNavigator from "./navigation/BottomNavigator";
import { MainNavigator } from "./navigation/NativeNavigator";

export default function App() {
	return (
		<NavigationContainer >
			<MainNavigator />
		</NavigationContainer>
	);
}

