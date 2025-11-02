'use client'

import React from 'react'
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

export default function Hero() {
  const { open } = useAppKit()
  const { isConnected } = useAccount()

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-400">Powered by Blockchain Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Total Vehicle
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Transparency
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Building a trust ecosystem for vehicle history. Track every car&apos;s journey from the lot to the junkyard with immutable, blockchain-verified records.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => open()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200"
            >
              {isConnected ? 'Get Started' : 'Connect Wallet to Start'}
            </button>
            <button className="px-8 py-4 bg-gray-800 border-2 border-gray-700 text-gray-200 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 font-medium">Immutable Records</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400 font-medium">Blockchain Verification</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-400 font-medium">Lifetime History</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
