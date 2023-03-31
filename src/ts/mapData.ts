const INSTANT_BANK_TRANSFER = "Instant Bank Transfer";
const MANUAL_BANK_TRANSFER = "Manual Bank Transfer";
const APPLE_PAY = "Apple Pay";
const SEPA = "Sepa";
const DEBIT_CARD = "Debit Card";
const CREDIT_CARD = "Credit Card";
const GOOGLE_PAY = "Google Pay";
const FASTER_PAYMENTS = "Faster Payments";
const OPEN_BANKING = "Open Banking";
const UPI_BANK_TRANSFER = "UPI Bank Transfer";
const MOBIWIKI = "MobiWiki";
const BANGKOKBANK = "Bangkok Bank";
const SCB_BANK = "SCB Bank";
const ASTRO_PAY = "AstroPay";
const PIX = "Pix";
const BOLETO = "Boleto";
const WEBPAY = "Web Pay";
const MAYA = "Maya";
const BPI = "BPI";
const RCBC = "RCBC";
const UNION_BANK = "Union Bank";
const GRAB = "Grab Pay";
const SHOPEE = "Shopee Pay";
const GCASH = "GCash";
const PSE = "PSE";

const COMING_SOON = {
    COMING_SOON: "Coming soon",
};
const CARDS = { DEBIT_CARD, CREDIT_CARD, GOOGLE_PAY }

const allPaymentMethods = {
    ...CARDS,
    INSTANT_BANK_TRANSFER,
    APPLE_PAY,
    GOOGLE_PAY,
    MANUAL_BANK_TRANSFER,
};




const mapDataEU = {
    "United Kingdom": {
        ...allPaymentMethods,
        
    },
    Andora: { ...allPaymentMethods },
    Austria: {
        ...allPaymentMethods,
        
    },
    Belgium: {
        ...allPaymentMethods,
        
    },
    Bulgaria: {
        ...allPaymentMethods,
        
    },
    Croatia: {
        ...allPaymentMethods,
        
    },
    Cyprus: { ...allPaymentMethods },
    Czechia: {
        ...allPaymentMethods,
        
    },
    Denmark: {
        ...allPaymentMethods,
        
    },
    Estonia: {
        ...allPaymentMethods,
        
    },
    Finland: {
        ...allPaymentMethods,
        
    },
    France: {
        ...allPaymentMethods,
        
    },
    Germany: {
        ...allPaymentMethods,
        
    },
    Greece: {
        ...allPaymentMethods,
        
    },
    Hungary: {
        ...allPaymentMethods,
        
    },
    Iceland: { ...allPaymentMethods },
    Ireland: {
        ...allPaymentMethods,
        
    },
    Italy: {
        ...allPaymentMethods,
        
    },
    Latvia: {
        ...allPaymentMethods,
        
    },
    Lithuania: {
        ...allPaymentMethods,
        
    },
    Luxembourg: {
        ...allPaymentMethods,
        
    },
    Malta: { ...allPaymentMethods },
    Monaco: { ...allPaymentMethods },
    Netherlands: {
        ...allPaymentMethods,
        
    },
    Norway: {
        ...allPaymentMethods,
        
    },
    Poland: {
        ...allPaymentMethods,
        
    },
    Portugal: {
        ...allPaymentMethods,
        
    },
    Romania: {
        ...allPaymentMethods,
        
    },
    "San Marino": { ...CARDS },
    Slovakia: {
        ...allPaymentMethods,
        
    },
    Slovenia: { ...allPaymentMethods },
    Spain: {
        ...allPaymentMethods,
        
    },
    Sweden: {
        ...allPaymentMethods,
        
    },
    Switzerland: {
        ...allPaymentMethods,
        
    },
    Vatican: { ...CARDS },
    Russia: { ...CARDS },
    Belarus: { ...COMING_SOON },
    Ukraine: { ...CARDS },
    Serbia: { ...CARDS },
    Gibraltar: {
        ...CARDS,
        
    }
};

const mapDataOther = {
    Australia: {
        ...CARDS,
        
    },
    "New Zealand": {
        ...CARDS,
        
        APPLE_PAY
    },
    Canada: {
        ...CARDS,
        
        APPLE_PAY
    },
    "South Africa": { ...CARDS },
    "Albania": { ...CARDS },
    "Algeria": { ...CARDS, APPLE_PAY},
    "Angola": { ...COMING_SOON },
    "Benin": { ...CARDS },
    "Bermuda": { ...CARDS },
    "Bhutan": { ...CARDS },
    "Bolivia": { ...CARDS },
    "Botswana": { ...CARDS },
    "Brunei": { ...CARDS },
    "Burkina Faso": { ...CARDS },
    "Burundi": { ...CARDS },
    "Cambodia": { ...CARDS },
    "Cameroon": { ...CARDS },
    "Canary Islands": { ...CARDS },
    "Chad": { ...CARDS },
    "Comoros": { ...CARDS },
    "Congo": { ...CARDS },
    "Djibouti": { ...CARDS },
    "Dem. Rep. Congo": { ...CARDS },
    "Dominica": { ...CARDS },
    "Ecuador": { ...CARDS },
    "Egypt": { ...CARDS },
    "Ethiopia": { ...CARDS },
    "French Guiana": { ...CARDS },
    "Gabon": { ...CARDS },
    "Gambia": { ...CARDS },
    "Georgia": { ...CARDS },
    "Ghana": { ...CARDS },
    "Greenland": { ...CARDS, APPLE_PAY },
    "Grenada": { ...CARDS },
    "Guadeloupe": { ...CARDS, APPLE_PAY },
    "Guinea-Bissau": { ...CARDS },
    "Guinea": { ...CARDS },
    "Guyana": { ...CARDS },
    "Haiti": { ...CARDS },
    "Honduras": { ...CARDS },
    "Indonesia": { ...CARDS },
    "Iraq": { ...CARDS },
    "Japan": { ...CARDS },
    "Kenya": { ...CARDS },
    "Kuwait": { ...CARDS },
    "Lao PDR": { ...CARDS },
    "Lebanon": { ...CARDS },
    "Lesotho": { ...CARDS},
    "Liberia": { ...CARDS },
    "Liechtenstein": {
        ...CARDS,
        
    },
    "Madagascar": { ...CARDS },
    "Malawi": { ...CARDS },
    "Malaysia": {
        ...CARDS,
        
    },
    "Maldives": { ...CARDS },
    "Mali": { ...CARDS },
    "Martinique": { ...CARDS },
    "Mauritania": { ...CARDS },
    "Mayotte": { ...CARDS,APPLE_PAY },
    "Moldova": { ...CARDS },
    "Mongolia": { ...CARDS },
    "Montenegro": { ...CARDS,APPLE_PAY },
    "Mozambique": { ...COMING_SOON },
    "Myanmar": { ...CARDS, APPLE_PAY },
    "Nauru": { ...CARDS },
    "New Caledonia": { ...CARDS },
    "Niger": { ...CARDS },
    "Nigeria": { ...CARDS },
    "Papua New Guinea": { ...CARDS },
    "Paraguay": { ...CARDS },
    "Peru": { ...CARDS, ASTRO_PAY },
    "Puerto Rico": { ...CARDS },
    "Reunion": { ...CARDS, APPLE_PAY},
    "Rwanda": { ...CARDS },
    "Saint Lucia": { ...CARDS },
    "Senegal": { ...CARDS },
    "Sierra Leone": { ...CARDS },
    "Sint Maarten": { ...CARDS },
    "Sri Lanka": { ...CARDS },
    "Suriname": { ...CARDS },
    "Tajikistan": { ...CARDS },
    "Tanzania": { ...CARDS },
    "Timor-Leste": { ...CARDS },
    "Togo": { ...CARDS },
    "Tonga": { ...CARDS },
    "Tunisia": { ...CARDS },
    "Turkmenistan": { ...CARDS },
    "Uganda": { ...CARDS },
    "United Arab Emirates": {
        ...CARDS,
        
    },
    "Uzbekistan": { ...CARDS },
    "Venezuela": { ...CARDS },
    "Vietnam": { ...CARDS },
    "Zambia": { ...CARDS }
};

const mapDataAsia = {
    India: { ...CARDS, UPI_BANK_TRANSFER, MOBIWIKI },
    Turkey: { ...CARDS },
    Israel: { ...CARDS },
    Philippines: { ...CARDS },
    Thailand: {
        ...CARDS,
        
        BANGKOKBANK,
        SCB_BANK
    },
    "South Korea": { ...CARDS },
    Kazakhstan: { ...CARDS },
    "Hong Kong": {
        ...CARDS,
        
    },
    Singapore: {
        ...CARDS,
        
    },
};

const mapDataLatinAmerica = {
    Argentina: { ...CARDS,APPLE_PAY },
    Brazil: {
        ...CARDS,
        
        APPLE_PAY,
        PIX,
        BOLETO
    },
    Colombia: { ...CARDS, PSE },
    Chile: { ...CARDS, ASTRO_PAY, WEBPAY },
    "Costa Rica": { ...CARDS },
    "Dominican Rep.": { ...CARDS },
    "El Salvador": { ...CARDS },
    Guatemala: { ...CARDS },
    Mexico: {
        ...CARDS,
        
    },
    Uruguay: { ...CARDS, ASTRO_PAY },
    Belize: { ...CARDS },
};

const mapDataUnitedStates = {
    "Alaska:": { ...CARDS },
    Alabama: { ...CARDS },
    Akansas: { ...CARDS },
    Arizona: { ...CARDS },
    California: { ...CARDS },
    Colorado: { ...CARDS },
    "Washington D.C": { ...CARDS },
    Delaware: { ...CARDS },
    Florida: { ...CARDS },
    Georgia: { ...CARDS },
    Iowa: { ...CARDS },
    Idaho: { ...CARDS },
    Indiana: { ...CARDS },
    Illinois: { ...CARDS },
    Kansas: { ...CARDS },
    Kentucky: { ...CARDS },
    Louisiana: { ...CARDS },
    Massachussets: { ...CARDS },
    Maryland: { ...CARDS },
    Maine: { ...CARDS },
    Michigan: { ...CARDS },
    Minnesota: { ...CARDS },
    Missouri: { ...CARDS },
    Mississippi: { ...CARDS },
    Montana: { ...CARDS },
    "North Carolina": { ...CARDS },
    "North Dakota": { ...CARDS },
    Nevada: { ...CARDS },
    "New Hampshire": { ...CARDS },
    "New Mexico": { ...CARDS },
    "New Jersey": { ...CARDS },
    Ohio: { ...CARDS },
    Oklahoma: { ...CARDS },
    Oregon: { ...CARDS },
    Pennsylvania: { ...CARDS },
    "Puerto Rico": { ...CARDS },
    "Rhode Island": { ...CARDS },
    "South Carolina": { ...CARDS },
    "South Dakota": { ...CARDS },
    Tenessee: { ...CARDS },
    Texas: { ...CARDS },
    Utah: { ...CARDS },
    Virginia: { ...CARDS },
    Vermont: { ...CARDS },
    Washington: { ...CARDS },
    Wisconsin: { ...CARDS },
    "West Virginia": { ...CARDS },
    Wyoming: { ...CARDS },
};

const mapDataGlobal = {
    ...mapDataEU,
    ...mapDataAsia,
    ...mapDataLatinAmerica,
    ...mapDataOther,
    // ...mapDataUnitedStates
    "United States": { ...CARDS, APPLE_PAY },
};