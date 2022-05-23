import ReactDOM from 'react-dom/client'
import './styles/base.css'
import './styles/index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
