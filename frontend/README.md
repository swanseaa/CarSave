# CarSafe - Web3 Vehicle Transparency Platform 🛡️

A decentralized application (dApp) leveraging blockchain technology to track a vehicle's complete lifecycle, from the lot to the junkyard. CarSafe eliminates guesswork and risk in used vehicle transactions through immutable, transparent records.

## 🚀 Features

- **Blockchain Verified Records**: Every vehicle record stored immutably on the blockchain
- **Complete Vehicle History**: Track accidents, repairs, ownership transfers, and maintenance
- **WalletConnect Integration**: Secure Web3 wallet connection using @reown/appkit
- **Real-time Verification**: Instant verification with VIN lookup
- **NFT Certificates**: Vehicle records as NFTs for authenticity proof
- **Multi-Stakeholder Platform**: Connects buyers, sellers, mechanics, and insurance companies

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS 4
- **Web3**: 
  - @reown/appkit (WalletConnect)
  - @reown/appkit-adapter-wagmi
  - Wagmi & Viem
  - TanStack React Query
- **Networks**: Ethereum Mainnet, Arbitrum, Polygon, Base, Sepolia

## 📋 Prerequisites

- Node.js 18+ and npm
- A WalletConnect Project ID from [Reown Cloud](https://cloud.reown.com)
- A Web3 wallet (MetaMask, Coinbase Wallet, etc.)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the frontend directory:

```bash
cp .env.example .env.local
```

Get your WalletConnect Project ID from [https://cloud.reown.com](https://cloud.reown.com) and add it:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see CarSafe!

## 🏗️ Project Structure

```
frontend/
├── app/
│   ├── components/        # React components
│   │   ├── Header.tsx    # Navigation with wallet connect
│   │   ├── Hero.tsx      # Landing hero section
│   │   ├── Features.tsx  # Feature showcase
│   │   ├── HowItWorks.tsx # Process explanation
│   │   ├── Benefits.tsx  # Benefits for stakeholders
│   │   └── Footer.tsx    # Footer component
│   ├── config/
│   │   └── wagmi.ts      # WalletConnect & Wagmi configuration
│   ├── contexts/
│   │   └── Web3Provider.tsx # Web3 context provider
│   ├── layout.tsx        # Root layout with Web3Provider
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── .env.local            # Environment variables (create this)
├── .env.example          # Environment template
└── package.json          # Dependencies
```

## 🌐 WalletConnect Integration

The app uses **@reown/appkit** (formerly WalletConnect AppKit) for seamless wallet connections:

### Usage in Components

```tsx
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

function Component() {
  const { open } = useAppKit()
  const { address, isConnected } = useAccount()
  
  return (
    <button onClick={() => open()}>
      {isConnected ? address : 'Connect Wallet'}
    </button>
  )
}
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about the technologies used:

- [WalletConnect Docs](https://docs.reown.com/appkit/overview) - WalletConnect integration
- [Wagmi Documentation](https://wagmi.sh) - React Hooks for Ethereum
- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## Deploy on Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variable: `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
4. Deploy!

---

Built with ❤️ on the blockchain
