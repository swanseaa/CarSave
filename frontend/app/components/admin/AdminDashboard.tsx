'use client'

import React, { useState } from 'react'
import StatsOverview from './StatsOverview'
import VehicleManagement from './VehicleManagement'
import UserActivity from './UserActivity'
import AdminSettings from './AdminSettings'

type TabType = 'overview' | 'vehicles' | 'activity' | 'settings'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
    { id: 'activity', label: 'Activity', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your CarSafe platform</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-800">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-6 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && <StatsOverview />}
          {activeTab === 'vehicles' && <VehicleManagement />}
          {activeTab === 'activity' && <UserActivity />}
          {activeTab === 'settings' && <AdminSettings />}
        </div>
      </div>
    </div>
  )
}

