'use client'

import React from 'react'
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'
import Link from 'next/link'

export default function Header() {
  const { open } = useAppKit()
  const { address, isConnected } = useAccount()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CarSafe
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-blue-400 transition-colors">
              Benefits
            </a>
            {isConnected && (
              <Link href="/admin" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1">
                <span>⚙️</span>
                <span>Admin</span>
              </Link>
            )}
          </div>

          <button
            onClick={() => open()}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200"
          >
            {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </header>
  )
}
