import { cleanEnv, str } from 'envalid'

export default cleanEnv(import.meta.env, {
  VITE_WALLET_CONNECT_PROJECT_ID: str(),
  VITE_ALCHEMY: str(),
  VITE_CONTRACT_ADDRESS: str(),
})
