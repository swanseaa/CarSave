'use client'

import React, { useState } from 'react'

interface Activity {
  id: string
  user: string
  action: string
  target: string
  timestamp: string
  status: 'success' | 'failed' | 'pending'
  txHash?: string
  feature?: 'Immutable Records' | 'Ecosystem Integration' | 'Instant Verification' | 'Digital Ownership Transfer'
}

export default function UserActivity() {
  const [timeFilter, setTimeFilter] = useState('24h')

  // Mock data - replace with actual data from your backend/smart contract
  const activities: Activity[] = [
    {
      id: '1',
      user: '0x742d35cc...beb',
      action: 'Vehicle Registration',
      target: 'BMW X5 2023',
      timestamp: '2024-01-15 14:32:15',
      status: 'success',
      txHash: '0x1234...5678',
      feature: 'Immutable Records',
    },
    {
      id: '2',
      user: '0x8a92f1e3...c3f',
      action: 'Service Record Added (Workshop)',
      target: 'Tesla Model 3',
      timestamp: '2024-01-15 14:15:42',
      status: 'success',
      txHash: '0x9876...4321',
      feature: 'Ecosystem Integration',
    },
    {
      id: '3',
      user: '0x3f4a9d21...d21',
      action: 'Ownership Transfer',
      target: 'Mercedes C-Class',
      timestamp: '2024-01-15 13:45:21',
      status: 'pending',
      feature: 'Digital Ownership Transfer',
    },
    {
      id: '4',
      user: '0x9b5ce45a...e45',
      action: 'QR Code Verification',
      target: 'Audi A4 2022',
      timestamp: '2024-01-15 12:30:18',
      status: 'success',
      feature: 'Instant Verification',
    },
    {
      id: '5',
      user: '0x1d7fa89c...a89',
      action: 'Maintenance Record (Dealership)',
      target: 'Toyota Camry',
      timestamp: '2024-01-15 11:20:45',
      status: 'success',
      txHash: '0xabcd...efgh',
      feature: 'Ecosystem Integration',
    },
    {
      id: '6',
      user: '0x5e8b2c4d...f12',
      action: 'VIN Scan Verification',
      target: 'Honda Accord 2021',
      timestamp: '2024-01-15 10:15:33',
      status: 'success',
      feature: 'Instant Verification',
    },
    {
      id: '7',
      user: '0x742d35cc...beb',
      action: 'Accident Report Logged',
      target: 'Honda Civic 2020',
      timestamp: '2024-01-15 09:45:12',
      status: 'success',
      txHash: '0xdef1...2345',
      feature: 'Immutable Records',
    },
    {
      id: '8',
      user: '0x2c9d4f5e...g34',
      action: 'Ownership Transfer Completed',
      target: 'Ford F-150',
      timestamp: '2024-01-15 08:30:25',
      status: 'success',
      txHash: '0x5678...9abc',
      feature: 'Digital Ownership Transfer',
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return '✅'
      case 'failed':
        return '❌'
      case 'pending':
        return '⏳'
      default:
        return '⚪'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'failed':
        return 'text-red-400'
      case 'pending':
        return 'text-yellow-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">User Activity Log</h3>
            <p className="text-gray-400 text-sm">Monitor all user actions on the platform</p>
          </div>
          <div className="flex gap-2">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="all">All Time</option>
            </select>
            <button className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors text-sm font-semibold">
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Actions</p>
              <p className="text-2xl font-bold text-white">{activities.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Successful</p>
              <p className="text-2xl font-bold text-green-400">
                {activities.filter(a => a.status === 'success').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">⏳</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Pending</p>
              <p className="text-2xl font-bold text-yellow-400">
                {activities.filter(a => a.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">❌</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Failed</p>
              <p className="text-2xl font-bold text-red-400">
                {activities.filter(a => a.status === 'failed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Transaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-2xl ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-gray-300">{activity.user}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-white">{activity.action}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-300">{activity.target}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-400">{activity.timestamp}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {activity.feature ? (
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${
                        activity.feature === 'Immutable Records' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                        activity.feature === 'Ecosystem Integration' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' :
                        activity.feature === 'Instant Verification' ? 'bg-purple-500/20 text-purple-400 border-purple-500/50' :
                        'bg-orange-500/20 text-orange-400 border-orange-500/50'
                      }`}>
                        {activity.feature}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {activity.txHash ? (
                      <a
                        href={`https://etherscan.io/tx/${activity.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {activity.txHash}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

