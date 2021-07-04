import BlueBerry from '../img/BlueBerry.png'
import ChernoslivBezKostochek from '../img/ForData/chernosliv-bez-kostochek.png'
import ChernoslivBezKostochek2 from '../img/ForData/chernosliv-bez-kostochek-2.png'
import SeedlessRedDriedPlums from '../img/ForData/Seedless-red-dried-plums.png'
import ChocolateApricots from '../img/ForData/chocolate-apricots.png'
import RedApricots from '../img/ForData/Red-apricots.png'
import GoldApricots from '../img/ForData/gold-apricots-Jumbo-Limited-edition.png'
import MangoKingSize from '../img/ForData/mango-king-size.png'
import MiniPineapple from '../img/ForData/dried-mini-pineapple-sliced-pieces.png'
import WhiteArabicFigs from '../img/ForData/white-arabic-figs.png'
import WholePear from '../img/ForData/whole-pear.png'
import SeedlessAppleGrannySmith from '../img/ForData/seedless-apple-granny-smith.png'
import JerkyPermission from '../img/ForData/jerky-permission.png'

export const ProductData = {
	0: {
		id: 0,
		title: 'Blackberry bluestem',
		raiting: 4.8,
		price: 2.40,
		img: BlueBerry,
		country: 'Romania',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural apricot',
		brand: 'Artisana',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	1: {
		id: 1,
		title: 'Seedless prune',
		raiting: 5.0,
		price: 3.00,
		img: ChernoslivBezKostochek,
		country: 'Chilli',
		discount: 33,
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural prune',
		brand: 'Barney',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},

	2: {
		id: 2,
		title: 'Raisins from red grapes Extra series',
		raiting: 5.0,
		price: 4.00,
		img: ChernoslivBezKostochek2,
		country: 'Chilli',
		volume: 500,

		devivery: {
			start: 4,
			end: 7,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural prune',
		brand: 'Betty Lou’s',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	3: {
		id: 3,
		title: 'Сhocolate apricots',
		raiting: 4.9,
		price: 2.60,
		img: ChocolateApricots,
		country: 'Brazilia',
		discount: 9,
		volume: 500,

		devivery: {
			start: 2,
			end: 4,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Dastony',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	4: {
		id: 4,
		title: 'Red apricots',
		raiting: 4.8,
		price: 2.10,
		img: RedApricots,
		country: 'Peru',
		volume: 500,

		devivery: {
			start: 6,
			end: 7,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Gopal’s',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	5: {
		id: 5,
		title: 'Gold apricots Jumbo Limited edition',
		raiting: 4.8,
		price: 5.40,
		img: GoldApricots,
		country: 'Morocco',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Mighty Sesame',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	6: {
		id: 6,
		title: 'Natural mango King size',
		raiting: 4.5,
		price: 14.00,
		img: MangoKingSize,
		country: 'India',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Dastony',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	7: {
		id: 7,
		title: 'Natural mango King size',
		raiting: 4.5,
		price: 14.00,
		img: MangoKingSize,
		country: 'India',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Artisana',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	8: {
		id: 8,
		title: 'Dried mini-pineapple sliced pieces',
		raiting: 4.4,
		price: 9.00,
		img: MiniPineapple,
		country: 'Turkish',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Barney',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	9: {
		id: 9,
		title: 'White adriatic figs',
		raiting: 4.4,
		price: 4.50,
		img: WhiteArabicFigs,
		country: 'Qatar',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Dastony',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	10: {
		id: 10,
		title: 'Whole pear',
		raiting: 4.4,
		price: 8.90,
		img: WholePear,
		country: 'Albania',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Artisana',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	11: {
		id: 11,
		title: 'Seedless apple halves Granny Smith',
		raiting: 4.3,
		price: 5.20,
		img: SeedlessAppleGrannySmith,
		country: 'Australia',
		discount: 20,
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Artisana',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
	12: {
		id: 12,
		title: 'Jerky persimmon',
		raiting: 4.3,
		price: 4.30,
		img: JerkyPermission,
		country: 'Australia',
		volume: 500,

		devivery: {
			start: 1,
			end: 3,
			type: 'days'
		},
		categoriesId: [
			1, 2, 3
		],
		composition: 'Natural chocolate apricots',
		brand: 'Artisana',
		vitamins: [
			'B1',
			'B2',
			'C',
			'A',
			'E',
		],
		description: [
			'Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.',
			'Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.',
			'Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.',
		],
		isInStock: true,
	},
}