import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface PriceData {
  crop: string
  icon: string
  currentPrice: number
  previousPrice: number
  change: number
  changePercent: number
  unit: string
  market: string
  lastUpdated: string
  weekHigh: number
  weekLow: number
  trend: 'up' | 'down' | 'stable'
}

interface MarketData {
  market: string
  distance: number
  prices: PriceData[]
}

const PriceTracker = () => {
  const [selectedMarket, setSelectedMarket] = useState('all')
  const [selectedCrop, setSelectedCrop] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const { t } = useLanguage()

  const marketData: MarketData[] = [
    {
      market: 'Sagar Mandi',
      distance: 2.1,
      prices: [
        {
          crop: 'Wheat',
          icon: '🌾',
          currentPrice: 2350,
          previousPrice: 2280,
          change: 70,
          changePercent: 3.07,
          unit: 'quintal',
          market: 'Sagar Mandi',
          lastUpdated: '2 hours ago',
          weekHigh: 2400,
          weekLow: 2200,
          trend: 'up'
        },
        {
          crop: 'Soybean',
          icon: '🫘',
          currentPrice: 5200,
          previousPrice: 5150,
          change: 50,
          changePercent: 0.97,
          unit: 'quintal',
          market: 'Sagar Mandi',
          lastUpdated: '2 hours ago',
          weekHigh: 5300,
          weekLow: 4950,
          trend: 'up'
        }
      ]
    },
    {
      market: 'Khurai Mandi',
      distance: 8.5,
      prices: [
        {
          crop: 'Wheat',
          icon: '🌾',
          currentPrice: 2320,
          previousPrice: 2340,
          change: -20,
          changePercent: -0.85,
          unit: 'quintal',
          market: 'Khurai Mandi',
          lastUpdated: '3 hours ago',
          weekHigh: 2380,
          weekLow: 2180,
          trend: 'down'
        },
        {
          crop: 'Chickpea',
          icon: '🫛',
          currentPrice: 6800,
          previousPrice: 6750,
          change: 50,
          changePercent: 0.74,
          unit: 'quintal',
          market: 'Khurai Mandi',
          lastUpdated: '3 hours ago',
          weekHigh: 6900,
          weekLow: 6500,
          trend: 'up'
        }
      ]
    },
    {
      market: 'Banda Mandi',
      distance: 12.1,
      prices: [
        {
          crop: 'Corn',
          icon: '🌽',
          currentPrice: 2100,
          previousPrice: 2100,
          change: 0,
          changePercent: 0,
          unit: 'quintal',
          market: 'Banda Mandi',
          lastUpdated: '4 hours ago',
          weekHigh: 2150,
          weekLow: 2000,
          trend: 'stable'
        }
      ]
    }
  ]

  const getAllPrices = (): PriceData[] => {
    return marketData.flatMap(market => market.prices)
  }

  const getFilteredPrices = (): PriceData[] => {
    let prices = getAllPrices()

    if (selectedMarket !== 'all') {
      prices = prices.filter(price => price.market === selectedMarket)
    }

    if (selectedCrop !== 'all') {
      prices = prices.filter(price => price.crop.toLowerCase().includes(selectedCrop.toLowerCase()))
    }

    return prices.sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
  }

  const markets = ['all', ...marketData.map(m => m.market)]
  const crops = ['all', ...Array.from(new Set(getAllPrices().map(p => p.crop)))]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈'
      case 'down': return '📉'
      default: return '➡️'
    }
  }

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-orange-600 p-4 text-white">
        <h1 className="text-2xl font-bold mb-1">Price Tracker</h1>
        <p className="text-orange-100 text-sm">Real-time crop prices from nearby markets</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Filters & Controls */}
        <Card>
          <CardContent>
            <div className="space-y-4">
              {/* Market & Crop Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Market
                  </label>
                  <select
                    value={selectedMarket}
                    onChange={(e) => setSelectedMarket(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {markets.map(market => (
                      <option key={market} value={market}>
                        {market === 'all' ? 'All Markets' : market}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crop
                  </label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {crops.map(crop => (
                      <option key={crop} value={crop}>
                        {crop === 'all' ? 'All Crops' : crop}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* View Mode */}
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  ⊞ Grid View
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  ☰ List View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Cards */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
          {getFilteredPrices().map((price, index) => (
            <Card key={`${price.crop}-${price.market}-${index}`} hover>
              <CardContent>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{price.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{price.crop}</h3>
                      <p className="text-sm text-gray-600">{price.market}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{price.currentPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per {price.unit}</div>
                  </div>
                </div>

                {/* Price Change */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTrendIcon(price.trend)}</span>
                    <span className={`text-sm font-medium ${getTrendColor(price.change)}`}>
                      {price.change >= 0 ? '+' : ''}₹{price.change} ({price.changePercent >= 0 ? '+' : ''}{price.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated {price.lastUpdated}
                  </div>
                </div>

                {/* Week Range */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Week Low:</span>
                      <span className="ml-1 font-medium">₹{price.weekLow.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Week High:</span>
                      <span className="ml-1 font-medium">₹{price.weekHigh.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    📊 View Chart
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    🔔 Set Alert
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {getFilteredPrices().length === 0 && (
          <Card>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No price data found</h3>
                <p className="text-gray-600">Try adjusting your filter criteria</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Market Summary */}
        <Card>
          <CardHeader>
            <CardTitle>📍 Market Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketData.map(market => (
                <div key={market.market} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{market.market}</h4>
                    <p className="text-sm text-gray-600">{market.distance} km away</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {market.prices.length} crops tracked
                    </p>
                    <Button size="sm" variant="outline" onClick={() => setSelectedMarket(market.market)}>
                      View Prices
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Alerts Info */}
        <Card>
          <CardHeader>
            <CardTitle>🔔 Price Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Set price alerts to get notified when crop prices reach your target levels:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>• Get SMS/WhatsApp notifications</div>
                <div>• Set multiple price thresholds</div>
                <div>• Track price trends over time</div>
                <div>• Compare prices across markets</div>
              </div>
              <Button className="w-full mt-4">
                🔔 Manage Price Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PriceTracker