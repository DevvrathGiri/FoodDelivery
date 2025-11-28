// ----------------------------------------------------
// Root Response
// ----------------------------------------------------
export interface Root {
  statusCode: number;
  data: Data;
  tid: string;
  sid: string;
  deviceId: string;
  csrfToken: string;
}

export interface Data {
  statusMessage: string;
  cards: Card[];
  firstOffsetRequest: boolean;
  isQCLink: boolean;
}

// ----------------------------------------------------
// High Level Card Wrappers
// ----------------------------------------------------
export interface Card {
  card?: Card2;
  groupedCard?: GroupedCard;
}

export interface Card2 {
  card: Card3;
  relevance?: Relevance;
}

export interface Card3 {
  "@type": string;
  text?: string;
  headerStyling?: HeaderStyling;
  tabs?: Tab[];
  info?: Info;                     // Restaurant Info
  layout?: Layout;
  id?: string;
  gridElements?: GridElements;
}

// ----------------------------------------------------
// Restaurant Info (cards[2].card.card.info)
// ----------------------------------------------------
export interface Info {
  id: string;
  name: string;
  city: string;
  slugs: Slugs;
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  feeDetails: FeeDetails;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  aggregatedDiscountInfo: AggregatedDiscountInfo;
  slugString: string;
  multiOutlet: boolean;
  isOpen: boolean;
  labels: Label[];
  logo: string;
  totalRatings: number;
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2;
  type: string;
  headerBanner: HeaderBanner;
  // generalPurposeInfoListV2: any[];
  ratingSlab: string;
  restaurantCategory: string;
  backgroundImage: string;
  hasBestsellerItems: boolean;
  latLong: string;
  dishStyle: DishStyle;
}

export interface Slugs {
  restaurant: string;
  city: string;
}

export interface FeeDetails {
  restaurantId: string;
  // fees: any[];
}

export interface Sla {
  restaurantId: string;
  deliveryTime: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  stressFactor: number;
  rainMode: string;
  longDistance: string;
  zoneId: number;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

export interface Availability {
  nextCloseTime: string;
  visibility: boolean;
  opened: boolean;
}

export interface AggregatedDiscountInfo {
  header: string;
  shortDescriptionList: ShortDescriptionList[];
  descriptionList: DescriptionList[];
  visible: boolean;
}

export interface ShortDescriptionList {
  meta: string;
  discountType: string;
  operationType: string;
}

export interface DescriptionList {
  meta: string;
  discountType: string;
  operationType: string;
}

export interface Label {
  title: string;
  message: string;
}

export interface AggregatedDiscountInfoV2 {
  header: string;
  shortDescriptionList: ShortDescriptionList2[];
  descriptionList: DescriptionList2[];
}

export interface ShortDescriptionList2 {
  meta: string;
  discountType: string;
  operationType: string;
}

export interface DescriptionList2 {
  meta: string;
  discountType: string;
  operationType: string;
}

export interface HeaderBanner {
  url: string;
}

export interface DishStyle {
  socialMarkerStyle: SocialMarkerStyle[];
}

export interface SocialMarkerStyle {
  socialMarkerType: string;
  title: string;
  textStyle: string;
  textColor: string;
}

// ----------------------------------------------------
// REGULAR Menu Section
// ----------------------------------------------------
export interface GroupedCard {
  cardGroupMap: CardGroupMap;
}

export interface CardGroupMap {
  REGULAR: Regular;
}

export interface Regular {
  cards: Card4[];
}

export interface Card4 {
  card: Card5;
}

export interface Card5 {
  card: Card6;
  relevance?: Relevance2;
}

// Card6 can contain: filters, categories, ItemCategory, itemCards, etc.
export interface Card6 {
  "@type": string;
  title?: string;
  categories?: Category[];         // Category based items
  itemCards?: ItemCard2[];         // ItemCategory based items
  image?: string;
  categoryId?: string;
}

// ----------------------------------------------------
// Category Based Items
// ----------------------------------------------------
export interface Category {
  title: string;
  itemCards: ItemCard[];
  categoryId: string;
}

export interface ItemCard {
  card: Card7;
}

export interface Card7 {
  "@type": string;
  info: Info5;                     // Dish Type 1
  hideRestaurantDetails: boolean;
}

// Dish Type 1
export interface Info5 {
  id: string;
  name: string;
  category: string;
  description?: string;
  imageId?: string;
  inStock: number;
  isVeg: number;
  price?: number;
  itemAttribute: ItemAttribute2;
  type: string;
  isBestseller?: boolean;
  ratings?: Ratings;               // Ratings type 1
  parentId: string;
}

export interface ItemAttribute2 {
  vegClassifier: string;
}

export interface Ratings {
  aggregatedRating: AggregatedRating;
  ratingsPresentationConfig: RatingsPresentationConfig;
}

export interface AggregatedRating {
  rating: string;
  ratingCount: string;
  ratingCountV2: string;
}

export interface RatingsPresentationConfig {
  bgGradient: BgGradient;
  ratingIconColor: string;
  ratingTextColor: string;
  ratingCountTextColor: string;
  ratingFontName: string;
  ratingCountFontName: string;
}

export interface BgGradient {
  colours: string[];
  gradientDirection: string;
}

// ----------------------------------------------------
// ItemCategory Based Items
// ----------------------------------------------------
export interface ItemCard2 {
  card: Card8;
}

export interface Card8 {
  "@type": string;
  info: Info6;                    // Dish Type 2
  hideRestaurantDetails: boolean;
}

// Dish Type 2 (same structure as Dish Type 1 but not exactly identical)
export interface Info6 {
  id: string;
  name: string;
  category: string;
  description: string;
  inStock: number;
  isVeg: number;
  price: number;
  itemAttribute: ItemAttribute3;
  type: string;
  ratings: Ratings2;              // Ratings type 2
  parentId: string;
}

export interface ItemAttribute3 {
  vegClassifier: string;
}

export interface Ratings2 {
  aggregatedRating: AggregatedRating2;
  ratingsPresentationConfig: RatingsPresentationConfig2;
}

export interface AggregatedRating2 {
  rating: string;
  ratingCount: string;
  ratingCountV2: string;
}

export interface RatingsPresentationConfig2 {
  bgGradient: BgGradient2;
  ratingIconColor: string;
  ratingTextColor: string;
  ratingCountTextColor: string;
  ratingFontName: string;
  ratingCountFontName: string;
}

export interface BgGradient2 {
  colours: string[];
  gradientDirection: string;
}

// ----------------------------------------------------
export interface Relevance {
  type: string;
  sectionId: string;
}

export interface Relevance2 {
  type: string;
  sectionId: string;
}
// ----------------------------------------------------
// Restaurant list API (used in Body.tsx)
// ----------------------------------------------------
export interface Restaurant {
  id: string;
  name: string;
  cloudinaryImageId?: string;
  cuisines: string[];
  avgRating?: number | string;
  costForTwo: number;
  sla?: {
    deliveryTime?: number;
  };
}
export interface RestaurantListItem {
  info: {
    id: string;
    name: string;
    cloudinaryImageId?: string;
    cuisines: string[];
    avgRating?: number | string;
    costForTwo: number;
    sla?: {
      deliveryTime?: number;
    };
  };
}

// ⭐ Add THIS helper type:
export type FlatRestaurant = RestaurantListItem["info"];
export interface RestaurantListItem {
  info: {
    id: string;
    name: string;
    cloudinaryImageId?: string;
    cuisines: string[];
    avgRating?: number | string;
    costForTwo: number;
    sla?: {
      deliveryTime?: number;
    };
  };
}
export type RestaurantCardProps = {
  resData: {
    id: string;
    name: string;
    cloudinaryImageId?: string;
    cuisines: string[];
    avgRating?: number | string;
    costForTwo: number;
    sla?: {
      deliveryTime?: number;
    };
  };
};


