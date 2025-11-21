'use client'

import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import AdminDashboard from '../components/admin/AdminDashboard'
import AdminHeader from '../components/admin/AdminHeader'

// List of admin wallet addresses (you can move this to env variables)
const ADMIN_ADDRESSES = [
  '0xa91d5a0a64ed5eef11c4359c4631279695a338ef', // Your admin wallet (lowercase)
  // Add more admin wallet addresses here (lowercase)
  // Example: '0x742d35cc6634c0532925a3b844bc9e7595f0beb',
]

export default function AdminPage() {
  const { address, isConnected } = useAccount()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isConnected) {
      setIsLoading(false)
      return
    }

    // Check if connected address is an admin
    const checkAdmin = address?.toLowerCase()
    const hasAccess = checkAdmin && ADMIN_ADDRESSES.includes(checkAdmin)
    setIsAdmin(!!hasAccess)
    setIsLoading(false)
  }, [address, isConnected])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔒</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Wallet Not Connected</h1>
            <p className="text-gray-400 mb-6">
              Please connect your wallet to access the admin panel.
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">⛔</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Access Denied</h1>
            <p className="text-gray-400 mb-2">
              Your wallet address is not authorized to access the admin panel.
            </p>
            <p className="text-xs text-gray-500 mb-6 font-mono break-all">
              {address}
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <AdminHeader />
      <AdminDashboard />
    </div>
  )
}

