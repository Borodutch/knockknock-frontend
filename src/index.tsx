import 'helpers/polyfills'
import 'index.css'
import { render } from 'preact'
import App from 'App'

render(<App />, document.getElementById('root') as Element)
