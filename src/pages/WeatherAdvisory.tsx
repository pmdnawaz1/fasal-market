import { useState } from 'react'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface WeatherData {
  today: {
    temperature: { min: number; max: number }
    humidity: number
    rainfall: number
    windSpeed: number
    condition: string
    icon: string
  }
  forecast: Array<{
    date: string
    day: string
    temperature: { min: number; max: number }
    rainfall: number
    condition: string
    icon: string
  }>
}

interface Advisory {
  id: number
  type: 'weather' | 'pest' | 'disease' | 'sowing' | 'harvest'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  crops: string[]
  icon: string
  date: string
}

const WeatherAdvisory = () => {
  const [selectedTab, setSelectedTab] = useState<'weather' | 'advisory'>('weather')
  const [selectedCrop, setSelectedCrop] = useState('all')

  const weatherData: WeatherData = {
    today: {
      temperature: { min: 18, max: 32 },
      humidity: 65,
      rainfall: 2.5,
      windSpeed: 12,
      condition: 'Partly Cloudy',
      icon: '⛅'
    },
    forecast: [
      { date: '2024-09-30', day: 'Tomorrow', temperature: { min: 19, max: 33 }, rainfall: 0, condition: 'Sunny', icon: '☀️' },
      { date: '2024-10-01', day: 'Tuesday', temperature: { min: 20, max: 35 }, rainfall: 0, condition: 'Sunny', icon: '☀️' },
      { date: '2024-10-02', day: 'Wednesday', temperature: { min: 18, max: 30 }, rainfall: 8, condition: 'Light Rain', icon: '🌦️' },
      { date: '2024-10-03', day: 'Thursday', temperature: { min: 17, max: 28 }, rainfall: 12, condition: 'Moderate Rain', icon: '🌧️' },
      { date: '2024-10-04', day: 'Friday', temperature: { min: 19, max: 31 }, rainfall: 3, condition: 'Cloudy', icon: '☁️' }
    ]
  }

  const advisories: Advisory[] = [
    {
      id: 1,
      type: 'weather',
      title: 'Heavy Rainfall Expected',
      description: 'Heavy rainfall is expected in the next 2-3 days. Ensure proper drainage in fields and postpone fertilizer application.',
      priority: 'high',
      crops: ['Wheat', 'Chickpea', 'Mustard'],
      icon: '🌧️',
      date: 'Today'
    },
    {
      id: 2,
      type: 'pest',
      title: 'Aphid Alert in Mustard',
      description: 'High aphid population observed in mustard fields. Apply recommended insecticides during cooler hours.',
      priority: 'high',
      crops: ['Mustard'],
      icon: '🐛',
      date: 'Yesterday'
    },
    {
      id: 3,
      type: 'sowing',
      title: 'Optimal Sowing Time for Wheat',
      description: 'Current weather conditions are favorable for wheat sowing. Maintain soil moisture and use certified seeds.',
      priority: 'medium',
      crops: ['Wheat'],
      icon: '🌱',
      date: '2 days ago'
    },
    {
      id: 4,
      type: 'disease',
      title: 'Rust Disease Prevention',
      description: 'Monitor wheat crops for rust symptoms. Apply fungicides preventively if weather remains humid.',
      priority: 'medium',
      crops: ['Wheat'],
      icon: '🦠',
      date: '3 days ago'
    },
    {
      id: 5,
      type: 'harvest',
      title: 'Chickpea Harvest Guidelines',
      description: 'Chickpea pods are ready for harvest. Choose dry weather days for harvesting to maintain quality.',
      priority: 'low',
      crops: ['Chickpea'],
      icon: '🌾',
      date: '4 days ago'
    }
  ]

  const crops = ['all', ...Array.from(new Set(advisories.flatMap(a => a.crops)))]

  const getFilteredAdvisories = () => {
    if (selectedCrop === 'all') return advisories
    return advisories.filter(advisory => advisory.crops.includes(selectedCrop))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-300 bg-red-50'
      case 'medium': return 'border-yellow-300 bg-yellow-50'
      default: return 'border-green-300 bg-green-50'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      default: return '🟢'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'weather': return 'bg-blue-100 text-blue-800'
      case 'pest': return 'bg-red-100 text-red-800'
      case 'disease': return 'bg-orange-100 text-orange-800'
      case 'sowing': return 'bg-green-100 text-green-800'
      case 'harvest': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-teal-600 p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">Weather & Advisory</h1>
        <p className="text-teal-100 text-sm">Get weather updates and expert farming advice</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg border">
          <button
            onClick={() => setSelectedTab('weather')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'weather'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🌤️ Weather Forecast
          </button>
          <button
            onClick={() => setSelectedTab('advisory')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'advisory'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📋 Crop Advisory
          </button>
        </div>

        {selectedTab === 'weather' && (
          <>
            {/* Current Weather */}
            <Card>
              <CardHeader>
                <CardTitle>🌤️ Current Weather - Sagar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-6xl">{weatherData.today.icon}</div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {weatherData.today.temperature.max}°C
                      </div>
                      <div className="text-sm text-gray-600">
                        Min: {weatherData.today.temperature.min}°C
                      </div>
                      <div className="text-lg text-gray-700">{weatherData.today.condition}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="text-sm text-gray-600">Humidity</div>
                    <div className="font-semibold">{weatherData.today.humidity}%</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-1">🌧️</div>
                    <div className="text-sm text-gray-600">Rainfall</div>
                    <div className="font-semibold">{weatherData.today.rainfall} mm</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-1">💨</div>
                    <div className="text-sm text-gray-600">Wind Speed</div>
                    <div className="font-semibold">{weatherData.today.windSpeed} km/h</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-1">🌡️</div>
                    <div className="text-sm text-gray-600">Range</div>
                    <div className="font-semibold">{weatherData.today.temperature.max - weatherData.today.temperature.min}°C</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5-Day Forecast */}
            <Card>
              <CardHeader>
                <CardTitle>📅 5-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{day.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900">{day.day}</div>
                          <div className="text-sm text-gray-600">{day.condition}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {day.temperature.max}°/{day.temperature.min}°C
                        </div>
                        <div className="text-sm text-blue-600">
                          {day.rainfall > 0 ? `${day.rainfall}mm rain` : 'No rain'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {selectedTab === 'advisory' && (
          <>
            {/* Crop Filter */}
            <Card>
              <CardContent>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Crop
                  </label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {crops.map(crop => (
                      <option key={crop} value={crop}>
                        {crop === 'all' ? 'All Crops' : crop}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Advisories */}
            <div className="space-y-4">
              {getFilteredAdvisories().map(advisory => (
                <Card key={advisory.id} className={`border-2 ${getPriorityColor(advisory.priority)}`}>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0">{advisory.icon}</div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold text-gray-900">{advisory.title}</h3>
                            <span className="text-lg">{getPriorityIcon(advisory.priority)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(advisory.type)}`}>
                              {advisory.type.charAt(0).toUpperCase() + advisory.type.slice(1)}
                            </span>
                            <span className="text-sm text-gray-500">{advisory.date}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3">{advisory.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {advisory.crops.map(crop => (
                              <span key={crop} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                🌱 {crop}
                              </span>
                            ))}
                          </div>
                          <Button size="sm" variant="outline">
                            📖 Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {getFilteredAdvisories().length === 0 && (
              <Card>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">📋</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No advisories found</h3>
                    <p className="text-gray-600">No advisories available for the selected crop</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Expert Contact */}
        <Card>
          <CardHeader>
            <CardTitle>👨‍🌾 Contact Agricultural Experts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="flex-1">
                📞 Call Krishi Helpline
                <br />
                <span className="text-sm opacity-80">1800-180-1551 (Toll Free)</span>
              </Button>
              <Button variant="outline" className="flex-1">
                💬 Chat with Expert
                <br />
                <span className="text-sm opacity-80">Available 9 AM - 6 PM</span>
              </Button>
            </div>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>• Get personalized advice for your crops</p>
              <p>• Discuss pest and disease management</p>
              <p>• Get weather-based farming recommendations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default WeatherAdvisory