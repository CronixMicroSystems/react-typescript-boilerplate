import 'babel-polyfill'
import {render} from 'react-dom'
import router from './router'
import './style/style'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

render(router, document.getElementById('root'))
