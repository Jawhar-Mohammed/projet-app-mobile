import { COLORS, ROUTES } from "../constants";

export const profileTabsList = [
	{
		text: "Profile",
		btnColor: "black",
		textColor: COLORS.orange,
	},
	{
		text: "Services",
		btnColor: COLORS.orange,
		textColor: "black",
	},
	{
		text: "Settings",
		btnColor: COLORS.orange,
		textColor: "black",
	},
	{
		text: "CashBack",
		btnColor: COLORS.orange,
		textColor: "black",
	},
	{
		text: "Info",
		btnColor: COLORS.orange,
		textColor: "black",
	},
];
export const settingsList = [
	{
		iconName: "loop",
		iconType: "material-icon",
		text: "Sécurité",
		description: "Accéder, vérifier, Touch ID, code",
		isLink: true,
	},
	{
		iconName: "qrcode-scan",
		iconType: "material-community",
		text: "PIN-code",
		description: "Gestion du PIN, appareils de confiance",
		isLink: true,
		to: ROUTES.PIN_MENU,
	},
	{
		iconName: "filetext1",
		iconType: "antdesign",
		text: "Notifications",
		description: "Masquer le solde, limiter les notifications",
		isLink: true,
	},
	{
		iconName: "call-outline",
		iconType: "ionicon",
		text: "Limites",
		description: "limite de jours, acheter/retirer de l'argent",
		isLink: true,
	},
	{
		iconName: "call-outline",
		iconType: "ionicon",
		text: "Thème",
		description: null,
		isLink: false,
	},
];
export const pinCodeSettingsList = [
	{
		iconName: "key-plus",
		iconType: "material-community",
		text: "Enrôller cet appareil",
		description: "Ajouter en tant qu'appareil de confiance",
		isLink: true,
		to: ROUTES.PIN_ENROLL,
	},
	{
		iconName: "lock",
		iconType: "font-awesome",
		text: "Modifier PIN-code",
		description: null,
		isLink: true,
		to: ROUTES.PIN_MODIFY,
	},
	{
		iconName: "mobile",
		iconType: "fontisto",
		text: "Gestion des appareils",
		description: "Gérer mes appareils de confiance",
		isLink: true,
		to: ROUTES.DEVICES_LIST,
		end: true,
	},
];
export const deviceList = {
	devices: [
		{
			name: "device1",
			type: "Iphone 11 pro Max",
			category: "mobile",
			lastConnexion: "2023/01/04 11:35:29",
			master: true,
		},
		{
			name: "device2",
			type: "Google Chrome",
			category: "laptop",
			lastConnexion: "2023/01/04 11:36:45",
			master: false,
		},
		{
			name: "device3",
			type: "Sumsung Galaxy S22",
			category: "mobile",
			lastConnexion: "2023/01/04 11:37:08",
			master: false,
		},
		{
			name: "device4",
			type: "Galaxy Tab S",
			category: "tablette",
			lastConnexion: "2023/01/04 11:37:35",
			master: false,
		},
	],
};
export const profileList = [
	{
		iconName: "call-outline",
		iconType: "ionicon",
		text: "Téléphone",
		description: "+212 6-31-14-19-56",
		isLink: true,
	},
	{
		iconName: "email",
		iconType: "fontisto",
		text: "Email",
		description: "mohammed.jawhare@gmail.com",
		isLink: true,
	},
	{
		iconName: "ios-home-outline",
		iconType: "ionicon",
		text: "Adresse",
		description: "12 Avenue zerktouni, Casablanca Maroc",
		isLink: true,
	},
	{
		iconName: "filetext1",
		iconType: "ant-design",
		text: "Documents",
		description: "Passport, Carte Identité ...",
		isLink: true,
	},
];
