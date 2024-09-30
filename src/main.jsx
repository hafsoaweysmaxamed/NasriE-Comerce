import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{Provider} from "react-redux"
import store from './redux/store/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import persistStore from 'redux-persist/es/persistStore'
// import Product from './Componantes/Product'



const parsist=persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store} >
  
<BrowserRouter>
<PersistGate  persistor={parsist}>

</PersistGate>
  <App/>
</BrowserRouter>

</Provider>

  
 
)
