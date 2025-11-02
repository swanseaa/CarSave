import React from 'react'

const benefits = [
  {
    title: 'For Buyers',
    points: [
      'Complete vehicle history verification',
      'No hidden accident or damage records',
      'Instant blockchain-verified reports',
      'Confidence in every purchase'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'For Sellers',
    points: [
      'Prove vehicle authenticity',
      'Increase buyer trust and confidence',
      'Faster sales with transparency',
      'Premium value for well-maintained cars'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'For Service Providers',
    points: [
      'Easy record submission to blockchain',
      'Build reputation with verified work',
      'Access to complete service history',
      'Streamlined insurance claims'
    ],
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Benefits for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            CarSafe creates value across the entire automotive ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white font-bold text-lg mb-6`}>
                {benefit.title}
              </div>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
