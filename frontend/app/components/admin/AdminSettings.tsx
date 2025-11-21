'use client'

import React, { useState } from 'react'
import { useAccount } from 'wagmi'

export default function AdminSettings() {
  const { address } = useAccount()
  const [newAdminAddress, setNewAdminAddress] = useState('')
  const [platformFee, setPlatformFee] = useState('2.5')
  const [minVerificationStake, setMinVerificationStake] = useState('0.1')

  // Mock admin list - replace with actual data
  const [admins, setAdmins] = useState([
    { address: '0x742d35cc6634c0532925a3b844bc9e7595f0beb', role: 'Super Admin', addedDate: '2024-01-01' },
    { address: '0x8a92f1e38d6c9ab2f3e4b5c7d8e9f0a1b2c3d4e5', role: 'Admin', addedDate: '2024-01-10' },
  ])

  const handleAddAdmin = () => {
    if (newAdminAddress && newAdminAddress.startsWith('0x')) {
      setAdmins([...admins, {
        address: newAdminAddress,
        role: 'Admin',
        addedDate: new Date().toISOString().split('T')[0]
      }])
      setNewAdminAddress('')
    }
  }

  const handleRemoveAdmin = (adminAddress: string) => {
    setAdmins(admins.filter(admin => admin.address !== adminAddress))
  }

  const handleSavePlatformSettings = () => {
    alert('Platform settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Platform Settings */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <span className="mr-2">⚙️</span>
          Platform Settings
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Platform Fee (%)
            </label>
            <input
              type="number"
              value={platformFee}
              onChange={(e) => setPlatformFee(e.target.value)}
              step="0.1"
              min="0"
              max="100"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">Fee charged on each transaction</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Minimum Verification Stake (ETH)
            </label>
            <input
              type="number"
              value={minVerificationStake}
              onChange={(e) => setMinVerificationStake(e.target.value)}
              step="0.01"
              min="0"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">Minimum stake required for vehicle verification</p>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="auto-verify"
              defaultChecked
              className="w-5 h-5 bg-gray-900/50 border-gray-700 rounded focus:ring-blue-500"
            />
            <label htmlFor="auto-verify" className="text-sm text-gray-300">
              Enable automatic verification for trusted sources
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="maintenance-mode"
              className="w-5 h-5 bg-gray-900/50 border-gray-700 rounded focus:ring-blue-500"
            />
            <label htmlFor="maintenance-mode" className="text-sm text-gray-300">
              Enable maintenance mode
            </label>
          </div>

          <button
            onClick={handleSavePlatformSettings}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200"
          >
            Save Settings
          </button>
        </div>
      </div>

      {/* Admin Management */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <span className="mr-2">👥</span>
          Admin Management
        </h3>

        {/* Add New Admin */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Add New Admin
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={newAdminAddress}
              onChange={(e) => setNewAdminAddress(e.target.value)}
              placeholder="0x..."
              className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
            <button
              onClick={handleAddAdmin}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 whitespace-nowrap"
            >
              Add Admin
            </button>
          </div>
        </div>

        {/* Admin List */}
        <div className="space-y-3">
          {admins.map((admin, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-white font-mono text-sm">{admin.address}</span>
                  {admin.address.toLowerCase() === address?.toLowerCase() && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/50">
                      You
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>Role: {admin.role}</span>
                  <span>Added: {admin.addedDate}</span>
                </div>
              </div>
              {admin.role !== 'Super Admin' && (
                <button
                  onClick={() => handleRemoveAdmin(admin.address)}
                  className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors text-sm font-semibold"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contract Information */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <span className="mr-2">📄</span>
          Smart Contract Information
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Main Contract</p>
            <p className="text-white font-mono text-sm">0x1234567890abcdef1234567890abcdef12345678</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Network</p>
            <p className="text-white text-sm">Ethereum Mainnet</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Contract Version</p>
            <p className="text-white text-sm">v1.0.0</p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-800/50">
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          <span className="mr-2">⚠️</span>
          Danger Zone
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          These actions are irreversible. Please be certain before proceeding.
        </p>
        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-red-600/20 text-red-400 rounded-lg font-semibold hover:bg-red-600/30 transition-colors text-left border border-red-600/50">
            Pause All Platform Operations
          </button>
          <button className="w-full px-4 py-3 bg-red-600/20 text-red-400 rounded-lg font-semibold hover:bg-red-600/30 transition-colors text-left border border-red-600/50">
            Emergency Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  )
}

