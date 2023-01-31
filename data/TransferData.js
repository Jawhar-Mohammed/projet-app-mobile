import { COLORS, ROUTES } from "../constants";

export const transferList = [
	{
		iconName: "arrow-both",
		iconType: "octicon",
		text: "Entre comptes",
		description: null,
		isLink: true,
		to: ROUTES.TRANSFER_RECEIPIENT,
	},
	{
		iconName: "person",
		iconType: "octicon",
		text: "À une autre personne",
		description: "Par carte, téléphone ou numéro de compte",
		isLink: true,
		to: ROUTES.TRANSFER_RECEIPIENT,
	},
	{
		iconName: "globe",
		iconType: "font-awesome",
		text: "À l'étranger",
		description: "Au bureau de la banque étrangère",
		isLink: true,
		to: ROUTES.TRANSFER_RECEIPIENT,
	},
];
export const paymentList = [
	{
		iconName: "loop",
		iconType: "material-icon",
		text: "Paiements automatiques",
		description: "Créer des paiements/virements réguliers",
		isLink: true,
	},
	{
		iconName: "qrcode-scan",
		iconType: "material-community",
		text: "Par Qr ou code barre",
		description: null,
		isLink: true,
	},
	{
		iconName: "filetext1",
		iconType: "antdesign",
		text: "Par conditions",
		description: null,
		isLink: true,
	},
	{
		iconName: "call-outline",
		iconType: "ionicon",
		text: "Connexion mobile",
		description: null,
		isLink: true,
	},
];
export const recipientData = [
	{
		name: "Jawdah Chraïbi",
		rib: "93453311648953222653465373",
		isFavorite: true,
	},
	{
		name: "Jabalah Al-Jirari",
		rib: "98467539877515529946154768",
		isFavorite: true,
	},
	{
		name: "Arib Bahéchar",
		rib: "22918658599857637414143196",
		isFavorite: false,
	},
	{
		name: "Is'il Hocquard",
		rib: "92769212764655979199859164",
		isFavorite: true,
	},
	{
		name: "Muwaffaq Choukri",
		rib: "70511982278439171323729353",
		isFavorite: true,
	},
	{
		name: "Thamir Sabila",
		rib: "70695642874825967884749877",
		isFavorite: false,
	},
	{
		name: "Lahcen Taïa",
		rib: "75998629659575728152747338",
		isFavorite: false,
	},
	{
		name: "Hadir Mernissi",
		rib: "76329599217516181891129795",
		isFavorite: false,
	},
	{
		name: "El Hassan Allal",
		rib: "63713731188968357374499858",
		isFavorite: false,
	},
];
export const recipientTabsList = [
	{
		text: "Tous",
		btnColor: "black",
		textColor: COLORS.orange,
	},
	{
		text: "Mes favoris",
		btnColor: COLORS.orange,
		textColor: "black",
	},
];
