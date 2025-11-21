'use client'

import React, { useState } from 'react'

interface Vehicle {
  id: string
  vin: string
  make: string
  model: string
  year: number
  owner: string
  status: 'verified' | 'pending' | 'flagged'
  lastUpdated: string
  recordsCount?: number
  ecosystemPartners?: string[]
  qrCodeGenerated?: boolean
  ownershipTransfers?: number
}

export default function VehicleManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')

  // Mock data - replace with actual data from your backend/smart contract
  const vehicles: Vehicle[] = [
    {
      id: '1',
      vin: '1HGBH41JXMN109186',
      make: 'BMW',
      model: 'X5',
      year: 2023,
      owner: '0x742d...beb',
      status: 'verified',
      lastUpdated: '2024-01-15',
      recordsCount: 12,
      ecosystemPartners: ['Dealership', 'Workshop'],
      qrCodeGenerated: true,
      ownershipTransfers: 1,
    },
    {
      id: '2',
      vin: '5YJSA1E14HF123456',
      make: 'Tesla',
      model: 'Model 3',
      year: 2022,
      owner: '0x8a92...c3f',
      status: 'verified',
      lastUpdated: '2024-01-14',
      recordsCount: 8,
      ecosystemPartners: ['Dealership', 'Insurance'],
      qrCodeGenerated: true,
      ownershipTransfers: 2,
    },
    {
      id: '3',
      vin: 'WDDGF8AB5EA123456',
      make: 'Mercedes',
      model: 'C-Class',
      year: 2023,
      owner: '0x3f4a...d21',
      status: 'pending',
      lastUpdated: '2024-01-13',
      recordsCount: 3,
      ecosystemPartners: ['Workshop'],
      qrCodeGenerated: false,
      ownershipTransfers: 0,
    },
    {
      id: '4',
      vin: 'WAUZZZ4G5DN123456',
      make: 'Audi',
      model: 'A4',
      year: 2022,
      owner: '0x9b5c...e45',
      status: 'flagged',
      lastUpdated: '2024-01-12',
      recordsCount: 5,
      ecosystemPartners: [],
      qrCodeGenerated: true,
      ownershipTransfers: 1,
    },
    {
      id: '5',
      vin: '4T1BF1FK5CU123456',
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      owner: '0x1d7f...a89',
      status: 'verified',
      lastUpdated: '2024-01-11',
      recordsCount: 15,
      ecosystemPartners: ['Dealership', 'Workshop', 'Insurance'],
      qrCodeGenerated: true,
      ownershipTransfers: 3,
    },
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = 
      vehicle.vin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || vehicle.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'flagged':
        return 'bg-red-500/20 text-red-400 border-red-500/50'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by VIN, make, or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="flagged">Flagged</option>
            </select>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 whitespace-nowrap">
              + Add Vehicle
            </button>
            <button className="px-4 py-3 bg-green-600/20 text-green-400 border border-green-500/50 rounded-lg font-semibold hover:bg-green-600/30 transition-all duration-200 whitespace-nowrap">
              🔍 Verify VIN/QR
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Total Vehicles</p>
          <p className="text-2xl font-bold text-white">{vehicles.length}</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Verified</p>
          <p className="text-2xl font-bold text-green-400">
            {vehicles.filter(v => v.status === 'verified').length}
          </p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">
            {vehicles.filter(v => v.status === 'pending').length}
          </p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Flagged</p>
          <p className="text-2xl font-bold text-red-400">
            {vehicles.filter(v => v.status === 'flagged').length}
          </p>
        </div>
      </div>

      {/* Vehicles Table */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  VIN
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Records
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Partners
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-gray-300">{vehicle.vin}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-white">
                      {vehicle.make} {vehicle.model}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-300">{vehicle.year}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-gray-300">{vehicle.owner}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-400">{vehicle.lastUpdated}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm font-semibold text-white">{vehicle.recordsCount || 0}</span>
                      <span className="text-xs text-gray-500">Immutable</span>
                      {vehicle.qrCodeGenerated && (
                        <span className="text-xs text-green-400">✓ QR Ready</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      {vehicle.ecosystemPartners && vehicle.ecosystemPartners.length > 0 ? (
                        <>
                          {vehicle.ecosystemPartners.slice(0, 2).map((partner, idx) => (
                            <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">
                              {partner}
                            </span>
                          ))}
                          {vehicle.ecosystemPartners.length > 2 && (
                            <span className="text-xs text-gray-500">+{vehicle.ecosystemPartners.length - 2} more</span>
                          )}
                        </>
                      ) : (
                        <span className="text-xs text-gray-500">None</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <div className="flex space-x-1">
                        <button className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-xs font-semibold">
                          View
                        </button>
                        <button className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-xs font-semibold">
                          Edit
                        </button>
                      </div>
                      <button className="px-2 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-xs font-semibold w-full">
                        Transfer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No vehicles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

