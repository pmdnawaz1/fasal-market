import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'hi' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  hi: {
    // Navigation
    home: 'होम',
    marketplace: 'बाज़ार',
    government: 'सरकार',
    tokens: 'टोकन',
    profile: 'प्रोफाइल',
    dashboard: 'डैशबोर्ड',
    'fasal-market': 'फसल मार्केट',
    'change-language': 'भाषा बदलें',
    hindi: 'हिन्दी',
    english: 'अंग्रेजी',

    // Login Page
    'kisan-suvidha': 'किसान सुविधा',
    'farmers-digital-helper': 'Farmer\'s Digital Helper',
    'mobile-number': 'मोबाइल नंबर',
    'enter-10-digit-mobile': '10 अंकों का मोबाइल नंबर डालें',
    'send-otp': 'OTP भेजें',
    'sending-otp': 'OTP भेजा जा रहा है...',
    'enter-otp-sent-to': 'OTP डालें जो भेजा गया है +91',
    'verify-login': 'सत्यापन करें और लॉगिन करें',
    'verifying': 'सत्यापन हो रहा है...',
    'change-number': '← नंबर बदलें',
    'demo-otp': '🔑 डेमो OTP: 1234',

    // Dashboard
    'namaste-ram-kumar': 'नमस्ते, राम कुमार जी! 🙏',
    'welcome-farming-dashboard': 'आपके खेती डैशबोर्ड में आपका स्वागत है',
    'total-earnings': 'कुल कमाई',
    'total-sales': 'कुल बिक्री',
    'pending-orders': 'लंबित ऑर्डर',
    'govt-tokens': 'सरकारी टोकन',
    'sell-to-private-buyers': 'निजी खरीदारों को बेचें',
    'government-procurement': 'सरकारी खरीद',
    'recent-sales': 'हाल की बिक्री',
    'view-all': 'सभी देखें',
    'notifications': 'सूचनाएं',

    // Recent Sales Data
    'wheat': 'गेहूं',
    'soybean': 'सोयाबीन',
    'chickpea': 'चना',
    'quintal': 'कुंतल',
    'private-buyer': 'प्राइवेट बायर',
    'government-purchase': 'सरकारी खरीद',
    'days-ago': 'दिन पहले',
    'week-ago': 'सप्ताह पहले',

    // Notifications
    'govt-wheat-purchase': 'सरकारी गेहूं खरीद',
    'starts-tomorrow-village': 'कल आपके गांव में शुरू होगी',
    'new-buyer-interested': 'नया खरीदार दिलचस्प',
    'wants-to-buy-soybean': 'कोई आपका सोयाबीन खरीदना चाहता है',
    'price-alert': 'भाव अलर्ट',
    'wheat-price-increased': 'गेहूं की कीमत 3% बढ़ी है',
    'hours-ago': 'घंटे पहले',

    // Common
    'active': 'सक्रिय',
    'ready': 'तैयार',
    'close': 'बंद करें',
    'sold': 'बेचा गया',
    'upcoming': 'आगामी',
    'select': 'चुनें',
    'add': 'जोड़ें',

    // Marketplace
    'add-new-crop-listing': 'नई फसल सूची जोड़ें',
    'crop-type': 'फसल का प्रकार',
    'select-crop': 'फसल चुनें',
    'quantity-quintals': 'मात्रा (कुंतल में)',
    'price-per-quintal': 'प्रति कुंतल दर',
    'description': 'विवरण',
    'add-photos': 'तस्वीरें जोड़ें',
    'post-listing': 'सूची पोस्ट करें',
    'my-listings': 'मेरी सूचियां',
    'nearby-listings': 'आसपास की सूचियां',
    'inquiries': 'पूछताछ',
    'km-away': 'किमी दूर',
    'contact-farmer': 'किसान से संपर्क करें',
    'chat-with': 'के साथ चैट करें',

    // Government Connect
    'upcoming-procurement-drives': 'आगामी खरीद अभियान',
    'past-government-purchases': 'पिछली सरकारी खरीदारी',
    'tomorrow': 'कल',
    'registration-open': 'पंजीकरण खुला',
    'coming-soon': 'जल्द आ रहा',
    'view-details': 'विवरण देखें',
    'register-now': 'अभी पंजीकरण करें',
    'get-token': 'टोकन लें',
    'token-number': 'टोकन नंबर',

    // Locations
    'sariya-mandi': 'सरिया मंडी',
    'district-headquarters': 'जिला मुख्यालय',
    'krishi-upaj-mandi': 'कृषि उपज मंडी',

    // Crops
    'onion': 'प्याज',
    'potato': 'आलू',
    'tomato': 'टमाटर',
    'corn': 'मक्का',
    'rice': 'चावल',
    'mustard': 'सरसों',

    // Token System
    'my-tokens': 'मेरे टोकन',
    'book-token': 'टोकन बुक करें',
    'book-new-token': 'नया टोकन बुक करें',
    'select-procurement-drive': 'खरीद अभियान चुनें',
    'choose-drive': 'अभियान चुनें',
    'select-time-slot': 'समय स्लॉट चुनें',
    'slot-full': 'भर गया',
    'slots-available': 'स्लॉट उपलब्ध',
    'sale': 'बिक्री',
    'confirmed': 'पुष्ट',
    'pending': 'प्रतीक्षारत',
    'completed': 'पूर्ण',
    'ready-to-sell': 'बेचने के लिए तैयार!',
    'show-qr-code': 'QR कोड दिखाएं',
    'cancel-token': 'टोकन रद्द करें',

    // Profile
    'edit-profile': 'प्रोफाइल संपादित करें',
    'verify-documents': 'दस्तावेज सत्यापित करें',
    'contact-support': 'सहायता से संपर्क करें',
    'logout': 'लॉगआउट',
    'village': 'गांव',
    'district': 'जिला',
    'farm-size': 'खेत का आकार',
    'kcc-number': 'KCC नंबर',
    'crops-grown': 'उगाई गई फसलें',
    'quick-actions': 'त्वरित क्रियाएं'
  },
  en: {
    // Navigation
    home: 'Home',
    marketplace: 'Marketplace',
    government: 'Government',
    tokens: 'Tokens',
    profile: 'Profile',
    dashboard: 'Dashboard',
    'fasal-market': 'Fasal Market',
    'change-language': 'Change Language',
    hindi: 'Hindi',
    english: 'English',

    // Login Page
    'kisan-suvidha': 'Fasal Market',
    'farmers-digital-helper': 'Farmer\'s Digital Helper',
    'mobile-number': 'Mobile Number',
    'enter-10-digit-mobile': 'Enter 10-digit mobile number',
    'send-otp': 'Send OTP',
    'sending-otp': 'Sending OTP...',
    'enter-otp-sent-to': 'Enter OTP sent to +91',
    'verify-login': 'Verify & Login',
    'verifying': 'Verifying...',
    'change-number': '← Change Number',
    'demo-otp': '🔑 Demo OTP: 1234',

    // Dashboard
    'namaste-ram-kumar': 'Hello, Ram Kumar! 👋',
    'welcome-farming-dashboard': 'Welcome to your farming dashboard',
    'total-earnings': 'Total Earnings',
    'total-sales': 'Total Sales',
    'pending-orders': 'Pending Orders',
    'govt-tokens': 'Govt Tokens',
    'sell-to-private-buyers': 'Sell to private buyers',
    'government-procurement': 'Government procurement',
    'recent-sales': 'Recent Sales',
    'view-all': 'View All',
    'notifications': 'Notifications',

    // Recent Sales Data
    'wheat': 'Wheat',
    'soybean': 'Soybean',
    'chickpea': 'Chickpea',
    'quintal': 'quintal',
    'private-buyer': 'Private Buyer',
    'government-purchase': 'Government Purchase',
    'days-ago': 'days ago',
    'week-ago': 'week ago',

    // Notifications
    'govt-wheat-purchase': 'Government Wheat Purchase',
    'starts-tomorrow-village': 'Starting tomorrow in your village',
    'new-buyer-interested': 'New Buyer Interested',
    'wants-to-buy-soybean': 'Someone wants to buy your soybean',
    'price-alert': 'Price Alert',
    'wheat-price-increased': 'Wheat price increased by 3%',
    'hours-ago': 'hours ago',

    // Common
    'active': 'Active',
    'ready': 'Ready',
    'close': 'Close',
    'sold': 'Sold',
    'upcoming': 'Upcoming',
    'select': 'Select',
    'add': 'Add',

    // Marketplace
    'add-new-crop-listing': 'Add New Crop Listing',
    'crop-type': 'Crop Type',
    'select-crop': 'Select Crop',
    'quantity-quintals': 'Quantity (in quintals)',
    'price-per-quintal': 'Price per quintal',
    'description': 'Description',
    'add-photos': 'Add Photos',
    'post-listing': 'Post Listing',
    'my-listings': 'My Listings',
    'nearby-listings': 'Nearby Listings',
    'inquiries': 'Inquiries',
    'km-away': 'km away',
    'contact-farmer': 'Contact Farmer',
    'chat-with': 'Chat with',

    // Government Connect
    'upcoming-procurement-drives': 'Upcoming Procurement Drives',
    'past-government-purchases': 'Past Government Purchases',
    'tomorrow': 'Tomorrow',
    'registration-open': 'Registration Open',
    'coming-soon': 'Coming Soon',
    'view-details': 'View Details',
    'register-now': 'Register Now',
    'get-token': 'Get Token',
    'token-number': 'Token Number',

    // Locations
    'sariya-mandi': 'Sariya Mandi',
    'district-headquarters': 'District Headquarters',
    'krishi-upaj-mandi': 'Krishi Upaj Mandi',

    // Crops
    'onion': 'Onion',
    'potato': 'Potato',
    'tomato': 'Tomato',
    'corn': 'Corn',
    'rice': 'Rice',
    'mustard': 'Mustard',

    // Token System
    'my-tokens': 'My Tokens',
    'book-token': 'Book Token',
    'book-new-token': 'Book New Token',
    'select-procurement-drive': 'Select Procurement Drive',
    'choose-drive': 'Choose a drive',
    'select-time-slot': 'Select Time Slot',
    'slot-full': 'Full',
    'slots-available': 'slots available',
    'sale': 'Sale',
    'confirmed': 'Confirmed',
    'pending': 'Pending',
    'completed': 'Completed',
    'ready-to-sell': 'Ready to sell!',
    'show-qr-code': 'Show QR Code',
    'cancel-token': 'Cancel Token',

    // Profile
    'edit-profile': 'Edit Profile',
    'verify-documents': 'Verify Documents',
    'contact-support': 'Contact Support',
    'logout': 'Logout',
    'village': 'Village',
    'district': 'District',
    'farm-size': 'Farm Size',
    'kcc-number': 'KCC Number',
    'crops-grown': 'Crops Grown',
    'quick-actions': 'Quick Actions'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}