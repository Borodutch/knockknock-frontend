import '@rainbow-me/rainbowkit/styles.css'
import { PropsWithChildren } from 'preact/compat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { base } from 'wagmi/chains'
import env from 'helpers/env'

const config = getDefaultConfig({
  appName: 'knockknock',
  projectId: env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [base],
})

const queryClient = new QueryClient()

export default function ({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
