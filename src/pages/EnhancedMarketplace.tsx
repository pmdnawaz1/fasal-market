import { useState } from 'react'
import { Link } from 'react-router-dom'
import { crops, categories, seasons, getCropsByCategory, getCropsBySeason, searchCrops, getCropById } from '../data/crops'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface Listing {
  id: string
  cropId: string
  farmerId: string
  farmerName: string
  quantity: number
  pricePerQuintal: number
  quality: 'A' | 'B' | 'C'
  location: string
  distance: number
  postedDate: string
  harvestDate: string
  organicCertified: boolean
  description: string
  images: string[]
}

const EnhancedMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSeason, setSelectedSeason] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'listings' | 'crops'>('listings')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState<'price' | 'distance' | 'quantity' | 'recent'>('recent')

  // Mock listings data with comprehensive crops
  const listings: Listing[] = [
    {
      id: '1',
      cropId: 'wheat',
      farmerId: 'f1',
      farmerName: 'Ramesh Kumar',
      quantity: 50,
      pricePerQuintal: 2400,
      quality: 'A',
      location: 'Sagar, MP',
      distance: 2.5,
      postedDate: '2024-09-28',
      harvestDate: '2024-03-15',
      organicCertified: true,
      description: 'Premium quality wheat from organic farming. HD-2967 variety.',
      images: ['wheat1.jpg', 'wheat2.jpg']
    },
    {
      id: '2',
      cropId: 'soybean',
      farmerId: 'f2',
      farmerName: 'Sunita Devi',
      quantity: 30,
      pricePerQuintal: 5300,
      quality: 'A',
      location: 'Khurai, MP',
      distance: 8.2,
      postedDate: '2024-09-27',
      harvestDate: '2024-10-05',
      organicCertified: false,
      description: 'Fresh soybean harvest, JS-95-60 variety. Excellent oil content.',
      images: ['soybean1.jpg']
    },
    {
      id: '3',
      cropId: 'chickpea',
      farmerId: 'f3',
      farmerName: 'Mohan Singh',
      quantity: 25,
      pricePerQuintal: 7000,
      quality: 'B',
      location: 'Banda, Sagar',
      distance: 12.1,
      postedDate: '2024-09-26',
      harvestDate: '2024-04-10',
      organicCertified: false,
      description: 'Good quality chickpea, JG-11 variety. Perfect for dal making.',
      images: ['chickpea1.jpg']
    },
    {
      id: '4',
      cropId: 'rice',
      farmerId: 'f4',
      farmerName: 'Lakshmi Narayan',
      quantity: 40,
      pricePerQuintal: 2200,
      quality: 'A',
      location: 'Rehli, MP',
      distance: 15.8,
      postedDate: '2024-09-25',
      harvestDate: '2024-11-20',
      organicCertified: true,
      description: 'Basmati rice, premium quality. Pusa Basmati-1 variety.',
      images: ['rice1.jpg', 'rice2.jpg']
    },
    {
      id: '5',
      cropId: 'mustard',
      farmerId: 'f5',
      farmerName: 'Rajesh Patel',
      quantity: 20,
      pricePerQuintal: 4900,
      quality: 'A',
      location: 'Garhakota, MP',
      distance: 18.5,
      postedDate: '2024-09-24',
      harvestDate: '2024-04-02',
      organicCertified: false,
      description: 'High oil content mustard seeds. Pusa Bold variety.',
      images: ['mustard1.jpg']
    },
    {
      id: '6',
      cropId: 'tomato',
      farmerId: 'f6',
      farmerName: 'Seema Sharma',
      quantity: 15,
      pricePerQuintal: 2800,
      quality: 'A',
      location: 'Sagar, MP',
      distance: 3.2,
      postedDate: '2024-09-28',
      harvestDate: '2024-09-27',
      organicCertified: true,
      description: 'Fresh tomatoes, just harvested. Pusa Ruby variety.',
      images: ['tomato1.jpg']
    },
    {
      id: '7',
      cropId: 'onion',
      farmerId: 'f7',
      farmerName: 'Dinesh Kumar',
      quantity: 35,
      pricePerQuintal: 3400,
      quality: 'B',
      location: 'Khurai, MP',
      distance: 8.7,
      postedDate: '2024-09-27',
      harvestDate: '2024-04-15',
      organicCertified: false,
      description: 'Good storage onions. Pusa Red variety with long shelf life.',
      images: ['onion1.jpg']
    },
    {
      id: '8',
      cropId: 'turmeric',
      farmerId: 'f8',
      farmerName: 'Kamala Bai',
      quantity: 10,
      pricePerQuintal: 8800,
      quality: 'A',
      location: 'Banda, Sagar',
      distance: 12.5,
      postedDate: '2024-09-26',
      harvestDate: '2024-02-28',
      organicCertified: true,
      description: 'Premium organic turmeric. High curcumin content.',
      images: ['turmeric1.jpg', 'turmeric2.jpg']
    }
  ]

  const getFilteredListings = () => {
    let filtered = listings

    // Filter by search query
    if (searchQuery) {
      const matchingCrops = searchCrops(searchQuery)
      const cropIds = matchingCrops.map(crop => crop.id)
      filtered = filtered.filter(listing =>
        cropIds.includes(listing.cropId) ||
        listing.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const categorycrops = getCropsByCategory(selectedCategory)
      const cropIds = categorycrops.map(crop => crop.id)
      filtered = filtered.filter(listing => cropIds.includes(listing.cropId))
    }

    // Filter by season
    if (selectedSeason !== 'all') {
      const seasonCrops = getCropsBySeason(selectedSeason)
      const cropIds = seasonCrops.map(crop => crop.id)
      filtered = filtered.filter(listing => cropIds.includes(listing.cropId))
    }

    // Sort listings
    switch (sortBy) {
      case 'price':
        filtered = filtered.sort((a, b) => a.pricePerQuintal - b.pricePerQuintal)
        break
      case 'distance':
        filtered = filtered.sort((a, b) => a.distance - b.distance)
        break
      case 'quantity':
        filtered = filtered.sort((a, b) => b.quantity - a.quantity)
        break
      case 'recent':
        filtered = filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
        break
    }

    return filtered
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'A': return 'text-green-600 bg-green-100'
      case 'B': return 'text-yellow-600 bg-yellow-100'
      case 'C': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredListings = getFilteredListings()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">🛒 Marketplace</h1>
        <p className="text-green-100 text-sm">Discover {crops.length}+ crop varieties from local farmers</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Search and View Toggle */}
        <Card>
          <CardContent>
            <div className="space-y-4">
              {/* Search Bar */}
              <div>
                <input
                  type="text"
                  placeholder="Search crops, farmers, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === 'listings' ? 'primary' : 'outline'}
                  onClick={() => setViewMode('listings')}
                  size="sm"
                >
                  📋 Listings ({filteredListings.length})
                </Button>
                <Button
                  variant={viewMode === 'crops' ? 'primary' : 'outline'}
                  onClick={() => setViewMode('crops')}
                  size="sm"
                >
                  🌾 Browse Crops ({crops.length})
                </Button>
                <Button
                  variant={showFilters ? 'primary' : 'outline'}
                  onClick={() => setShowFilters(!showFilters)}
                  size="sm"
                >
                  🔍 Filters
                </Button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                    <select
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      {seasons.map(season => (
                        <option key={season.id} value={season.id}>
                          {season.icon} {season.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="recent">📅 Most Recent</option>
                      <option value="price">💰 Price (Low to High)</option>
                      <option value="distance">📍 Distance (Near to Far)</option>
                      <option value="quantity">📦 Quantity (High to Low)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Content based on view mode */}
        {viewMode === 'crops' ? (
          // Crop Browse Mode
          <div className="space-y-6">
            {/* Category Grid */}
            <Card>
              <CardHeader>
                <CardTitle>🏷️ Browse by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {categories.slice(1).map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setViewMode('listings')
                      }}
                      className="flex flex-col items-center p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-200 hover:scale-105 min-h-[100px] sm:min-h-[120px]"
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{category.icon}</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900 text-center leading-tight">{category.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{category.count} varieties</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Crops */}
            <Card>
              <CardHeader>
                <CardTitle>⭐ Featured Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {crops.slice(0, 10).map(crop => (
                    <Card key={crop.id} hover>
                      <CardContent>
                        <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                          <div className="text-4xl flex-shrink-0 self-center sm:self-start sm:mt-1">{crop.icon}</div>
                          <div className="flex-1 min-w-0 w-full">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-2 sm:space-y-0">
                              <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{crop.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 italic mb-2">{crop.scientificName}</p>
                              </div>
                              <div className="text-left sm:text-right sm:ml-2">
                                <div className="text-lg font-bold text-green-600">
                                  ₹{crop.avgPrice.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500">per {crop.unit}</div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                {crop.category}
                              </span>
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                {crop.season}
                              </span>
                            </div>

                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{crop.description}</p>

                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button
                                size="sm"
                                className="flex-1"
                                onClick={() => {
                                  setSelectedCategory(crop.category)
                                  setViewMode('listings')
                                }}
                              >
                                View Listings
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 sm:flex-none"
                                onClick={() => {
                                  setSearchQuery(crop.name)
                                  setViewMode('listings')
                                }}
                              >
                                Search
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Listings Mode
          <div className="space-y-4">
            {filteredListings.map(listing => {
              const crop = getCropById(listing.cropId)
              if (!crop) return null

              return (
                <Card key={listing.id} hover>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl flex-shrink-0 mt-1">{crop.icon}</div>

                      <div className="flex-1 min-w-0">
                        {/* Header with title and price */}
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {crop.name} - {listing.quantity} {crop.unit}
                            </h3>
                            <div className="flex items-center text-sm text-gray-600 space-x-1">
                              <span>👤 {listing.farmerName}</span>
                              <span>•</span>
                              <span>📍 {listing.location}</span>
                              <span>•</span>
                              <span>🚛 {listing.distance} km</span>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-green-600">
                              ₹{listing.pricePerQuintal.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">per {crop.unit}</div>
                          </div>
                        </div>

                        {/* Quality badges */}
                        <div className="flex items-center flex-wrap gap-2 mb-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getQualityColor(listing.quality)}`}>
                            Grade {listing.quality}
                          </span>
                          {listing.organicCertified && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              🌿 Organic
                            </span>
                          )}
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            📅 Harvested: {new Date(listing.harvestDate).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{listing.description}</p>

                        {/* Varieties */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {crop.varieties.slice(0, 2).map((variety, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                              {variety}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            📞 Contact Farmer
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            💬 Chat
                          </Button>
                          <Button variant="outline" size="sm" className="px-4">
                            📋 Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {filteredListings.length === 0 && (
              <Card>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                    <Button onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                      setSelectedSeason('all')
                    }}>
                      Clear All Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>📊 Marketplace Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{crops.length}+</div>
                <div className="text-sm text-gray-600">Crop Varieties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{listings.length}</div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {new Set(listings.map(l => l.farmerId)).size}
                </div>
                <div className="text-sm text-gray-600">Active Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {listings.reduce((sum, l) => sum + l.quantity, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Quintals</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EnhancedMarketplace