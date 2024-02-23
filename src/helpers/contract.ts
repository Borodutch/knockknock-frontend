import { KnockKnock__factory } from '@borodutch/knockknock-contract'
import env from 'helpers/env'

export default KnockKnock__factory.connect(env.VITE_CONTRACT_ADDRESS)
