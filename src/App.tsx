import { ConnectButton } from '@rainbow-me/rainbowkit'
import Knock from 'components/Knock'
import Wallet from 'components/Wallet'

export default function () {
  return (
    <Wallet>
      <div className="container mx-auto max-w-prose p-10 prose">
        <div className="flex flex-col gap-4">
          <h1>knockknock</h1>
          <ConnectButton />
          <Knock />
        </div>
      </div>
    </Wallet>
  )
}
