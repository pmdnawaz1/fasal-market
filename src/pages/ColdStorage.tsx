import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface ColdStorageUnit {
  id: number
  name: string
  location: string
  capacity: string
  available: string
  pricePerQuintal: number
  rating: number
  distance: number
  features: string[]
  contact: string
  image: string
}

const ColdStorage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchLocation, setSearchLocation] = useState('')
  const { t } = useLanguage()

  const coldStorageUnits: ColdStorageUnit[] = [
    {
      id: 1,
      name: "Sagar Advanced Cold Storage",
      location: "Industrial Area, Sagar",
      capacity: "5000 MT",
      available: "1200 MT",
      pricePerQuintal: 25,
      rating: 4.8,
      distance: 3.2,
      features: ["Temperature Control", "Humidity Control", "24/7 Security", "Easy Access"],
      contact: "+91 9876543210",
      image: "🏢"
    },
    {
      id: 2,
      name: "Khurai Multi-Commodity Storage",
      location: "Khurai, MP",
      capacity: "3000 MT",
      available: "800 MT",
      pricePerQuintal: 22,
      rating: 4.5,
      distance: 8.5,
      features: ["Multi-Commodity", "Quality Assurance", "Insurance Coverage"],
      contact: "+91 9876543211",
      image: "🏭"
    },
    {
      id: 3,
      name: "Banda Cooperative Cold Store",
      location: "Banda, Sagar",
      capacity: "2000 MT",
      available: "500 MT",
      pricePerQuintal: 20,
      rating: 4.2,
      distance: 12.1,
      features: ["Cooperative", "Low Cost", "Government Backed"],
      contact: "+91 9876543212",
      image: "🏬"
    },
    {
      id: 4,
      name: "Rehli Premium Storage",
      location: "Rehli Market Yard",
      capacity: "4000 MT",
      available: "2000 MT",
      pricePerQuintal: 30,
      rating: 4.9,
      distance: 15.8,
      features: ["Premium Quality", "Latest Technology", "Quick Loading"],
      contact: "+91 9876543213",
      image: "🏛️"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Storages', count: coldStorageUnits.length },
    { id: 'nearby', label: 'Nearby (<10km)', count: coldStorageUnits.filter(unit => unit.distance < 10).length },
    { id: 'available', label: 'High Availability', count: coldStorageUnits.filter(unit => parseInt(unit.available) > 1000).length },
    { id: 'affordable', label: 'Budget Friendly', count: coldStorageUnits.filter(unit => unit.pricePerQuintal < 25).length }
  ]

  const getFilteredUnits = () => {
    let filtered = coldStorageUnits

    switch (selectedFilter) {
      case 'nearby':
        filtered = filtered.filter(unit => unit.distance < 10)
        break
      case 'available':
        filtered = filtered.filter(unit => parseInt(unit.available) > 1000)
        break
      case 'affordable':
        filtered = filtered.filter(unit => unit.pricePerQuintal < 25)
        break
    }

    if (searchLocation) {
      filtered = filtered.filter(unit =>
        unit.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        unit.name.toLowerCase().includes(searchLocation.toLowerCase())
      )
    }

    return filtered.sort((a, b) => a.distance - b.distance)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">Cold Storage Finder</h1>
        <p className="text-blue-100 text-sm">Find and compare cold storage facilities near you</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Search and Filters */}
        <Card>
          <CardContent>
            <div className="space-y-4">
              {/* Search Bar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by location
                </label>
                <input
                  type="text"
                  placeholder="Enter location or storage name..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Units */}
        <div className="space-y-4">
          {getFilteredUnits().map(unit => (
            <Card key={unit.id} hover>
              <CardContent>
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0 mt-1">
                    {unit.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {unit.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center">
                          📍 {unit.location} • {unit.distance} km away
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-500 mb-1">
                          ⭐ <span className="ml-1 text-sm font-medium text-gray-900">{unit.rating}</span>
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          ₹{unit.pricePerQuintal}/quintal
                        </div>
                      </div>
                    </div>

                    {/* Capacity Info */}
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Total Capacity</p>
                        <p className="text-sm font-semibold">{unit.capacity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Available Space</p>
                        <p className="text-sm font-semibold text-green-600">{unit.available}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {unit.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        📞 Contact ({unit.contact})
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        📋 Book Space
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getFilteredUnits().length === 0 && (
          <Card>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No storage units found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or location</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle>💡 Storage Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Book storage space in advance during peak season</p>
              <p>• Compare prices and read reviews before booking</p>
              <p>• Check for insurance coverage and quality certifications</p>
              <p>• Consider location convenience for regular monitoring</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ColdStorage