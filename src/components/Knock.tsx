import { useAccount } from 'wagmi'
import { useState } from 'preact/hooks'
import contract from 'helpers/contract'
import useEthersSigner from 'hooks/useEthersSigner'

export default function () {
  const { isConnected } = useAccount()
  if (!isConnected) {
    return <p>Please, connect a wallet!</p>
  }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const signer = useEthersSigner()

  return (
    <div className="flex flex-col gap-2">
      <button
        class="btn btn-primary"
        onClick={async () => {
          setLoading(true)
          setSuccess(false)
          setError('')
          try {
            if (!signer) {
              throw new Error('No signer found')
            }
            const signedContract = contract.connect(signer)
            await (await signedContract.knock()).wait()
            setSuccess(true)
          } catch (error) {
            const errorText = error instanceof Error ? error.message : error
            console.error(errorText)
            setError(errorText)
          } finally {
            setLoading(false)
          }
        }}
        disabled={loading}
      >
        {loading && '🤔 '}Knock!
      </button>
      {success && (
        <div role="alert" class="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Yay, you knocked!</span>
        </div>
      )}
      {error && (
        <div role="alert" class="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Oh, no! Something went wrong! {error}</span>
        </div>
      )}
    </div>
  )
}
