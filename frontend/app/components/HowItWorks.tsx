import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Use WalletConnect to securely connect your Web3 wallet to CarSafe.'
  },
  {
    number: '02',
    title: 'Register Vehicle',
    description: 'Add your vehicle to the blockchain with VIN and initial documentation.'
  },
  {
    number: '03',
    title: 'Track History',
    description: 'All service records, accidents, and transfers are automatically logged.'
  },
  {
    number: '04',
    title: 'Verify & Trade',
    description: 'Buyers can verify complete history before purchase with confidence.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps to complete vehicle transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 -z-10"></div>
              )}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
