import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface Industry {
  id: number
  name: string
  type: string
  location: string
  requirements: string[]
  currentNeed: string
  priceRange: string
  rating: number
  distance: number
  contact: string
  established: string
  certification: string[]
  icon: string
}

const IndustryConnect = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCrop, setSelectedCrop] = useState('all')
  const { t } = useLanguage()

  const industries: Industry[] = [
    {
      id: 1,
      name: "Sagar Agro Processing Ltd",
      type: "Food Processing",
      location: "Industrial Area, Sagar",
      requirements: ["Wheat", "Soybean", "Chickpea"],
      currentNeed: "500 MT Wheat",
      priceRange: "₹2,200-2,500/quintal",
      rating: 4.7,
      distance: 5.2,
      contact: "+91 9876543220",
      established: "2015",
      certification: ["ISO 9001", "FSSAI", "Organic Certified"],
      icon: "🏭"
    },
    {
      id: 2,
      name: "MP Oils & Extracts",
      type: "Oil Mill",
      location: "Khurai Industrial Zone",
      requirements: ["Soybean", "Mustard", "Sunflower"],
      currentNeed: "300 MT Soybean",
      priceRange: "₹4,800-5,200/quintal",
      rating: 4.5,
      distance: 8.7,
      contact: "+91 9876543221",
      established: "2010",
      certification: ["BIS", "Agmark", "Export License"],
      icon: "⚙️"
    },
    {
      id: 3,
      name: "Central Flour Mills",
      type: "Flour Production",
      location: "Banda, Sagar",
      requirements: ["Wheat", "Corn", "Barley"],
      currentNeed: "200 MT Wheat",
      priceRange: "₹2,100-2,400/quintal",
      rating: 4.3,
      distance: 12.5,
      contact: "+91 9876543222",
      established: "2008",
      certification: ["FSSAI", "BIS"],
      icon: "🌾"
    },
    {
      id: 4,
      name: "Bundelkhand Dairy Coop",
      type: "Dairy & Feed",
      location: "Rehli Road, Sagar",
      requirements: ["Corn", "Soybean Meal", "Wheat Bran"],
      currentNeed: "150 MT Corn",
      priceRange: "₹1,800-2,100/quintal",
      rating: 4.6,
      distance: 7.3,
      contact: "+91 9876543223",
      established: "2012",
      certification: ["Cooperative License", "Feed License"],
      icon: "🥛"
    },
    {
      id: 5,
      name: "Export House Agri",
      type: "Export Company",
      location: "Transport Nagar, Sagar",
      requirements: ["Chickpea", "Lentils", "Wheat"],
      currentNeed: "400 MT Chickpea",
      priceRange: "₹6,500-7,200/quintal",
      rating: 4.8,
      distance: 6.1,
      contact: "+91 9876543224",
      established: "2005",
      certification: ["Export License", "Organic", "Fair Trade"],
      icon: "🚢"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Industries', count: industries.length },
    { id: 'food-processing', label: 'Food Processing', count: industries.filter(i => i.type === 'Food Processing').length },
    { id: 'oil-mill', label: 'Oil Mills', count: industries.filter(i => i.type === 'Oil Mill').length },
    { id: 'export', label: 'Export Companies', count: industries.filter(i => i.type === 'Export Company').length },
    { id: 'dairy', label: 'Dairy & Feed', count: industries.filter(i => i.type === 'Dairy & Feed').length }
  ]

  const crops = [
    { id: 'all', label: 'All Crops' },
    { id: 'wheat', label: 'Wheat' },
    { id: 'soybean', label: 'Soybean' },
    { id: 'chickpea', label: 'Chickpea' },
    { id: 'corn', label: 'Corn' },
    { id: 'mustard', label: 'Mustard' }
  ]

  const getFilteredIndustries = () => {
    let filtered = industries

    if (selectedCategory !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'food-processing': 'Food Processing',
        'oil-mill': 'Oil Mill',
        'export': 'Export Company',
        'dairy': 'Dairy & Feed'
      }
      filtered = filtered.filter(industry => industry.type === categoryMap[selectedCategory])
    }

    if (selectedCrop !== 'all') {
      filtered = filtered.filter(industry =>
        industry.requirements.some(req => req.toLowerCase().includes(selectedCrop.toLowerCase()))
      )
    }

    return filtered.sort((a, b) => b.rating - a.rating)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-purple-600 p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">Industry Connect</h1>
        <p className="text-purple-100 text-sm">Connect directly with industries and get better prices</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Filters */}
        <Card>
          <CardContent>
            <div className="space-y-4">
              {/* Category Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700 border border-purple-300'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Crop Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Crop
                </label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {crops.map(crop => (
                    <option key={crop.id} value={crop.id}>
                      {crop.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Industries List */}
        <div className="space-y-4">
          {getFilteredIndustries().map(industry => (
            <Card key={industry.id} hover>
              <CardContent>
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0 mt-1">
                    {industry.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center mb-1">
                          🏭 {industry.type} • Est. {industry.established}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          📍 {industry.location} • {industry.distance} km away
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-500 mb-1">
                          ⭐ <span className="ml-1 text-sm font-medium text-gray-900">{industry.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Current Need */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                      <p className="text-sm font-semibold text-green-800 mb-1">
                        🎯 Current Requirement
                      </p>
                      <p className="text-green-700 font-medium">{industry.currentNeed}</p>
                      <p className="text-sm text-green-600">{industry.priceRange}</p>
                    </div>

                    {/* Requirements */}
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Crops Accepted:</p>
                      <div className="flex flex-wrap gap-1">
                        {industry.requirements.map((req, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Certifications:</p>
                      <div className="flex flex-wrap gap-1">
                        {industry.certification.map((cert, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                          >
                            ✓ {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        📞 Contact Industry
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        📋 Send Proposal
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getFilteredIndustries().length === 0 && (
          <Card>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No industries found</h3>
                <p className="text-gray-600">Try adjusting your filter criteria</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>🌟 Benefits of Industry Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Direct sales to industries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Better prices than middlemen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Guaranteed payment terms</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Quality assurance programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Long-term contracts available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Technical support & guidance</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default IndustryConnect