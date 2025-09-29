export interface Crop {
  id: string
  name: string
  scientificName: string
  icon: string
  category: 'cereals' | 'pulses' | 'oilseeds' | 'vegetables' | 'fruits' | 'spices' | 'cash-crops'
  season: 'kharif' | 'rabi' | 'zaid' | 'perennial'
  avgPrice: number
  unit: 'quintal' | 'kg' | 'tonne'
  storageLife: number // in days
  description: string
  varieties: string[]
  majorStates: string[]
  harvestMonths: string[]
  nutrients: string[]
  uses: string[]
}

export const crops: Crop[] = [
  // Cereals
  {
    id: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    icon: '🌾',
    category: 'cereals',
    season: 'rabi',
    avgPrice: 2350,
    unit: 'quintal',
    storageLife: 365,
    description: 'Major food grain and staple crop of India',
    varieties: ['HD-2967', 'PBW-550', 'DBW-88', 'WH-147'],
    majorStates: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Carbohydrates', 'Protein', 'Fiber', 'B Vitamins'],
    uses: ['Flour', 'Bread', 'Pasta', 'Breakfast cereals']
  },
  {
    id: 'rice',
    name: 'Rice',
    scientificName: 'Oryza sativa',
    icon: '🍚',
    category: 'cereals',
    season: 'kharif',
    avgPrice: 2100,
    unit: 'quintal',
    storageLife: 730,
    description: 'Primary food grain for majority of Indian population',
    varieties: ['Pusa Basmati-1', 'IR-64', 'Swarna', 'Samba Mahsuri'],
    majorStates: ['West Bengal', 'Punjab', 'Andhra Pradesh', 'Tamil Nadu'],
    harvestMonths: ['September', 'October', 'November'],
    nutrients: ['Carbohydrates', 'Protein', 'Thiamine', 'Niacin'],
    uses: ['Cooked rice', 'Rice flour', 'Rice wine', 'Animal feed']
  },
  {
    id: 'corn',
    name: 'Corn (Maize)',
    scientificName: 'Zea mays',
    icon: '🌽',
    category: 'cereals',
    season: 'kharif',
    avgPrice: 1950,
    unit: 'quintal',
    storageLife: 180,
    description: 'Versatile cereal crop used for food and animal feed',
    varieties: ['HQPM-1', 'Pusa HQPM-5', 'DHM-117', 'Bio-9681'],
    majorStates: ['Karnataka', 'Andhra Pradesh', 'Tamil Nadu', 'Rajasthan'],
    harvestMonths: ['September', 'October'],
    nutrients: ['Carbohydrates', 'Protein', 'Vitamin C', 'Magnesium'],
    uses: ['Human food', 'Animal feed', 'Starch production', 'Ethanol']
  },
  {
    id: 'barley',
    name: 'Barley',
    scientificName: 'Hordeum vulgare',
    icon: '🌾',
    category: 'cereals',
    season: 'rabi',
    avgPrice: 1800,
    unit: 'quintal',
    storageLife: 365,
    description: 'Hardy cereal grain used for food and brewing',
    varieties: ['RD-2552', 'PL-426', 'BH-393', 'K-551'],
    majorStates: ['Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Haryana'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Fiber', 'Manganese', 'Selenium', 'B Vitamins'],
    uses: ['Animal feed', 'Malt production', 'Food products', 'Brewing']
  },

  // Pulses
  {
    id: 'chickpea',
    name: 'Chickpea (Chana)',
    scientificName: 'Cicer arietinum',
    icon: '🫛',
    category: 'pulses',
    season: 'rabi',
    avgPrice: 6800,
    unit: 'quintal',
    storageLife: 365,
    description: 'Important pulse crop rich in protein',
    varieties: ['JG-11', 'JG-14', 'RSG-888', 'KAK-2'],
    majorStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Protein', 'Fiber', 'Folate', 'Iron'],
    uses: ['Dal', 'Flour', 'Snacks', 'Sprouting']
  },
  {
    id: 'lentil',
    name: 'Lentil (Masur)',
    scientificName: 'Lens culinaris',
    icon: '🫘',
    category: 'pulses',
    season: 'rabi',
    avgPrice: 7200,
    unit: 'quintal',
    storageLife: 730,
    description: 'Nutritious pulse crop with high protein content',
    varieties: ['PL-639', 'IPL-81', 'DPL-15', 'LL-931'],
    majorStates: ['Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'West Bengal'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Protein', 'Iron', 'Folate', 'Potassium'],
    uses: ['Dal', 'Soup', 'Curry', 'Salads']
  },
  {
    id: 'pigeon-pea',
    name: 'Pigeon Pea (Arhar)',
    scientificName: 'Cajanus cajan',
    icon: '🫘',
    category: 'pulses',
    season: 'kharif',
    avgPrice: 8500,
    unit: 'quintal',
    storageLife: 365,
    description: 'Important kharif pulse crop',
    varieties: ['Asha', 'UPAS-120', 'Maruti', 'Bahar'],
    majorStates: ['Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Andhra Pradesh'],
    harvestMonths: ['January', 'February', 'March'],
    nutrients: ['Protein', 'Fiber', 'Potassium', 'Magnesium'],
    uses: ['Dal', 'Green pods as vegetable', 'Animal feed']
  },
  {
    id: 'black-gram',
    name: 'Black Gram (Urad)',
    scientificName: 'Vigna mungo',
    icon: '🫘',
    category: 'pulses',
    season: 'kharif',
    avgPrice: 9200,
    unit: 'quintal',
    storageLife: 365,
    description: 'Important pulse for South Indian cuisine',
    varieties: ['T-9', 'Pant U-19', 'ADT-3', 'KU-96-3'],
    majorStates: ['Andhra Pradesh', 'Tamil Nadu', 'Madhya Pradesh', 'Maharashtra'],
    harvestMonths: ['September', 'October'],
    nutrients: ['Protein', 'Iron', 'Calcium', 'Phosphorus'],
    uses: ['Dal', 'Idli/Dosa batter', 'Papad', 'Traditional dishes']
  },

  // Oilseeds
  {
    id: 'soybean',
    name: 'Soybean',
    scientificName: 'Glycine max',
    icon: '🫘',
    category: 'oilseeds',
    season: 'kharif',
    avgPrice: 5200,
    unit: 'quintal',
    storageLife: 365,
    description: 'Major oilseed crop with high protein and oil content',
    varieties: ['JS-95-60', 'MACS-450', 'DSB-21', 'PK-1024'],
    majorStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka'],
    harvestMonths: ['September', 'October'],
    nutrients: ['Protein', 'Oil', 'Isoflavones', 'Fiber'],
    uses: ['Oil extraction', 'Soy milk', 'Tofu', 'Animal feed']
  },
  {
    id: 'mustard',
    name: 'Mustard',
    scientificName: 'Brassica juncea',
    icon: '🌻',
    category: 'oilseeds',
    season: 'rabi',
    avgPrice: 4800,
    unit: 'quintal',
    storageLife: 365,
    description: 'Important rabi oilseed crop',
    varieties: ['Pusa Bold', 'RH-30', 'Ganga-2', 'Varuna'],
    majorStates: ['Rajasthan', 'Haryana', 'Madhya Pradesh', 'Punjab'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Oil', 'Protein', 'Vitamin E', 'Omega-3'],
    uses: ['Mustard oil', 'Condiment', 'Pickles', 'Green leafy vegetable']
  },
  {
    id: 'groundnut',
    name: 'Groundnut (Peanut)',
    scientificName: 'Arachis hypogaea',
    icon: '🥜',
    category: 'oilseeds',
    season: 'kharif',
    avgPrice: 5500,
    unit: 'quintal',
    storageLife: 180,
    description: 'Important oilseed and snack crop',
    varieties: ['GG-20', 'TAG-24', 'TG-37A', 'GPBD-4'],
    majorStates: ['Gujarat', 'Andhra Pradesh', 'Tamil Nadu', 'Karnataka'],
    harvestMonths: ['September', 'October', 'November'],
    nutrients: ['Oil', 'Protein', 'Niacin', 'Vitamin E'],
    uses: ['Edible oil', 'Snacks', 'Peanut butter', 'Confectionery']
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    icon: '🌻',
    category: 'oilseeds',
    season: 'kharif',
    avgPrice: 6200,
    unit: 'quintal',
    storageLife: 365,
    description: 'High quality edible oil producing crop',
    varieties: ['MSFH-17', 'KBSH-1', 'PAC-36', 'DRSH-1'],
    majorStates: ['Karnataka', 'Andhra Pradesh', 'Maharashtra', 'Bihar'],
    harvestMonths: ['December', 'January'],
    nutrients: ['Oil', 'Vitamin E', 'Magnesium', 'Selenium'],
    uses: ['Cooking oil', 'Margarine', 'Animal feed', 'Biodiesel']
  },

  // Vegetables
  {
    id: 'tomato',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    icon: '🍅',
    category: 'vegetables',
    season: 'perennial',
    avgPrice: 2500,
    unit: 'quintal',
    storageLife: 7,
    description: 'Popular vegetable crop rich in vitamins',
    varieties: ['Pusa Ruby', 'Pusa Rohini', 'Arka Vikas', 'Hisar Arun'],
    majorStates: ['Andhra Pradesh', 'Karnataka', 'Odisha', 'West Bengal'],
    harvestMonths: ['Year-round'],
    nutrients: ['Lycopene', 'Vitamin C', 'Potassium', 'Folate'],
    uses: ['Fresh consumption', 'Processing', 'Ketchup', 'Paste']
  },
  {
    id: 'onion',
    name: 'Onion',
    scientificName: 'Allium cepa',
    icon: '🧅',
    category: 'vegetables',
    season: 'rabi',
    avgPrice: 3200,
    unit: 'quintal',
    storageLife: 180,
    description: 'Essential vegetable crop used as spice',
    varieties: ['Pusa Ratnar', 'Pusa Red', 'Agrifound Light Red', 'Bhima Super'],
    majorStates: ['Maharashtra', 'Karnataka', 'Gujarat', 'Madhya Pradesh'],
    harvestMonths: ['March', 'April', 'May'],
    nutrients: ['Quercetin', 'Vitamin C', 'Fiber', 'Chromium'],
    uses: ['Cooking', 'Salads', 'Processing', 'Export']
  },
  {
    id: 'potato',
    name: 'Potato',
    scientificName: 'Solanum tuberosum',
    icon: '🥔',
    category: 'vegetables',
    season: 'rabi',
    avgPrice: 1800,
    unit: 'quintal',
    storageLife: 120,
    description: 'Important tuber crop and staple food',
    varieties: ['Kufri Jyoti', 'Kufri Pukhraj', 'Kufri Badshah', 'Kufri Chipsona'],
    majorStates: ['Uttar Pradesh', 'West Bengal', 'Bihar', 'Punjab'],
    harvestMonths: ['February', 'March'],
    nutrients: ['Carbohydrates', 'Vitamin C', 'Potassium', 'Fiber'],
    uses: ['Fresh consumption', 'Processing', 'Chips', 'Starch']
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    scientificName: 'Brassica oleracea',
    icon: '🥬',
    category: 'vegetables',
    season: 'rabi',
    avgPrice: 1500,
    unit: 'quintal',
    storageLife: 30,
    description: 'Leafy vegetable rich in vitamins',
    varieties: ['Golden Acre', 'Pride of India', 'Pusa Drum Head', 'Copenhagen Market'],
    majorStates: ['West Bengal', 'Odisha', 'Karnataka', 'Maharashtra'],
    harvestMonths: ['December', 'January', 'February'],
    nutrients: ['Vitamin K', 'Vitamin C', 'Fiber', 'Folate'],
    uses: ['Salads', 'Cooking', 'Coleslaw', 'Fermentation']
  },

  // Fruits
  {
    id: 'mango',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    icon: '🥭',
    category: 'fruits',
    season: 'perennial',
    avgPrice: 4500,
    unit: 'quintal',
    storageLife: 14,
    description: 'King of fruits with excellent taste and nutrition',
    varieties: ['Alphonso', 'Dashehari', 'Kesar', 'Langra', 'Chausa'],
    majorStates: ['Uttar Pradesh', 'Andhra Pradesh', 'Karnataka', 'Gujarat'],
    harvestMonths: ['April', 'May', 'June'],
    nutrients: ['Vitamin A', 'Vitamin C', 'Fiber', 'Potassium'],
    uses: ['Fresh fruit', 'Juice', 'Pickle', 'Dried products']
  },
  {
    id: 'banana',
    name: 'Banana',
    scientificName: 'Musa paradisiaca',
    icon: '🍌',
    category: 'fruits',
    season: 'perennial',
    avgPrice: 2800,
    unit: 'quintal',
    storageLife: 7,
    description: 'Nutritious fruit available year-round',
    varieties: ['Grand Naine', 'Robusta', 'Dwarf Cavendish', 'Red Banana'],
    majorStates: ['Tamil Nadu', 'Gujarat', 'Maharashtra', 'Andhra Pradesh'],
    harvestMonths: ['Year-round'],
    nutrients: ['Potassium', 'Vitamin B6', 'Vitamin C', 'Fiber'],
    uses: ['Fresh fruit', 'Chips', 'Juice', 'Baby food']
  },
  {
    id: 'orange',
    name: 'Orange',
    scientificName: 'Citrus sinensis',
    icon: '🍊',
    category: 'fruits',
    season: 'perennial',
    avgPrice: 3500,
    unit: 'quintal',
    storageLife: 21,
    description: 'Citrus fruit rich in Vitamin C',
    varieties: ['Nagpur Orange', 'Coorg Orange', 'Kinnow', 'Malta'],
    majorStates: ['Maharashtra', 'Punjab', 'Andhra Pradesh', 'Karnataka'],
    harvestMonths: ['December', 'January', 'February'],
    nutrients: ['Vitamin C', 'Fiber', 'Folate', 'Potassium'],
    uses: ['Fresh fruit', 'Juice', 'Processing', 'Essential oils']
  },

  // Spices
  {
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    icon: '🫚',
    category: 'spices',
    season: 'kharif',
    avgPrice: 8500,
    unit: 'quintal',
    storageLife: 730,
    description: 'Golden spice with medicinal properties',
    varieties: ['Rajendra Sonia', 'Roma', 'Sudarshana', 'Kedaram'],
    majorStates: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka', 'Odisha'],
    harvestMonths: ['January', 'February', 'March'],
    nutrients: ['Curcumin', 'Iron', 'Manganese', 'Vitamin B6'],
    uses: ['Spice', 'Medicine', 'Cosmetics', 'Food coloring']
  },
  {
    id: 'chilli',
    name: 'Chilli',
    scientificName: 'Capsicum annuum',
    icon: '🌶️',
    category: 'spices',
    season: 'kharif',
    avgPrice: 12000,
    unit: 'quintal',
    storageLife: 180,
    description: 'Hot spice crop with high economic value',
    varieties: ['Pusa Jwala', 'Arka Lohit', 'Byadgi', 'Guntur Sannam'],
    majorStates: ['Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Maharashtra'],
    harvestMonths: ['February', 'March', 'April'],
    nutrients: ['Capsaicin', 'Vitamin C', 'Vitamin A', 'Potassium'],
    uses: ['Spice', 'Pickle', 'Sauce', 'Medicine']
  },
  {
    id: 'coriander',
    name: 'Coriander',
    scientificName: 'Coriandrum sativum',
    icon: '🌿',
    category: 'spices',
    season: 'rabi',
    avgPrice: 9500,
    unit: 'quintal',
    storageLife: 365,
    description: 'Aromatic spice and herb crop',
    varieties: ['Pant Haritma', 'Rajendra Swati', 'Gujarat Coriander-1', 'CS-6'],
    majorStates: ['Madhya Pradesh', 'Gujarat', 'Rajasthan', 'Andhra Pradesh'],
    harvestMonths: ['March', 'April'],
    nutrients: ['Vitamin K', 'Vitamin C', 'Potassium', 'Manganese'],
    uses: ['Spice', 'Garnish', 'Medicine', 'Essential oil']
  },

  // Cash Crops
  {
    id: 'cotton',
    name: 'Cotton',
    scientificName: 'Gossypium hirsutum',
    icon: '🌱',
    category: 'cash-crops',
    season: 'kharif',
    avgPrice: 5800,
    unit: 'quintal',
    storageLife: 730,
    description: 'Important fiber crop for textile industry',
    varieties: ['Bt Cotton', 'Suraj', 'DHY-286', 'Bunny Bt'],
    majorStates: ['Gujarat', 'Maharashtra', 'Andhra Pradesh', 'Karnataka'],
    harvestMonths: ['October', 'November', 'December'],
    nutrients: ['Fiber', 'Oil (from seeds)', 'Protein'],
    uses: ['Textile', 'Oil (cottonseed)', 'Animal feed', 'Medical cotton']
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    scientificName: 'Saccharum officinarum',
    icon: '🎋',
    category: 'cash-crops',
    season: 'perennial',
    avgPrice: 350,
    unit: 'quintal',
    storageLife: 1,
    description: 'Major sugar producing crop',
    varieties: ['Co-238', 'CoS-8436', 'Co-0238', 'Co-86032'],
    majorStates: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    harvestMonths: ['December', 'January', 'February', 'March'],
    nutrients: ['Sucrose', 'Fiber', 'Water', 'Minerals'],
    uses: ['Sugar production', 'Jaggery', 'Ethanol', 'Bagasse for paper']
  }
]

export const getCropsByCategory = (category: string): Crop[] => {
  if (category === 'all') return crops
  return crops.filter(crop => crop.category === category)
}

export const getCropById = (id: string): Crop | undefined => {
  return crops.find(crop => crop.id === id)
}

export const getCropsBySeason = (season: string): Crop[] => {
  if (season === 'all') return crops
  return crops.filter(crop => crop.season === season || crop.season === 'perennial')
}

export const searchCrops = (query: string): Crop[] => {
  const searchTerm = query.toLowerCase()
  return crops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm) ||
    crop.scientificName.toLowerCase().includes(searchTerm) ||
    crop.varieties.some(variety => variety.toLowerCase().includes(searchTerm))
  )
}

export const categories = [
  { id: 'all', name: 'All Crops', icon: '🌾', count: crops.length },
  { id: 'cereals', name: 'Cereals', icon: '🌾', count: crops.filter(c => c.category === 'cereals').length },
  { id: 'pulses', name: 'Pulses', icon: '🫘', count: crops.filter(c => c.category === 'pulses').length },
  { id: 'oilseeds', name: 'Oilseeds', icon: '🌻', count: crops.filter(c => c.category === 'oilseeds').length },
  { id: 'vegetables', name: 'Vegetables', icon: '🥕', count: crops.filter(c => c.category === 'vegetables').length },
  { id: 'fruits', name: 'Fruits', icon: '🍎', count: crops.filter(c => c.category === 'fruits').length },
  { id: 'spices', name: 'Spices', icon: '🌶️', count: crops.filter(c => c.category === 'spices').length },
  { id: 'cash-crops', name: 'Cash Crops', icon: '🌱', count: crops.filter(c => c.category === 'cash-crops').length },
]

export const seasons = [
  { id: 'all', name: 'All Seasons', icon: '🗓️' },
  { id: 'kharif', name: 'Kharif (Monsoon)', icon: '🌧️' },
  { id: 'rabi', name: 'Rabi (Winter)', icon: '❄️' },
  { id: 'zaid', name: 'Zaid (Summer)', icon: '☀️' },
  { id: 'perennial', name: 'Year Round', icon: '🔄' }
]