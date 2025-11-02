import React from 'react'

const features = [
  {
    icon: '🔗',
    title: 'Blockchain Verified',
    description: 'Every vehicle record is stored on the blockchain, ensuring transparency and immutability.'
  },
  {
    icon: '📊',
    title: 'Complete History',
    description: 'Track accidents, repairs, ownership transfers, and maintenance from day one.'
  },
  {
    icon: '🔐',
    title: 'Secure & Private',
    description: 'Your data is encrypted and secured using Web3 technology and smart contracts.'
  },
  {
    icon: '⚡',
    title: 'Instant Verification',
    description: 'Get real-time verification of vehicle history with just a VIN lookup.'
  },
  {
    icon: '🤝',
    title: 'Trust Ecosystem',
    description: 'Build trust between buyers, sellers, mechanics, and insurance companies.'
  },
  {
    icon: '💎',
    title: 'NFT Certificates',
    description: 'Vehicle records as NFTs provide proof of authenticity and ownership.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">CarSafe</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionizing vehicle history verification with cutting-edge blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
