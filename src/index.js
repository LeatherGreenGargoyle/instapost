import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Router from './Router'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'))
registerServiceWorker()
