import React ,{Suspense} from 'react'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './store'
import {renderRoutes} from 'react-router-config'
import routes from './router'
import NKHeader from './components/app-header'
import NKFooter from './components/app-footer'
import NKPlayer from './pages/player'
function App(props) {
  return (
    
    <Provider store={Store}>
    <div className="App">
      <HashRouter>
      <NKHeader/>
      <Suspense fallback={<div>正在加载</div>}>
        {renderRoutes(routes)}
        </Suspense>
      <NKFooter />
      </HashRouter>  
      <NKPlayer />  
    </div>
    </Provider>
  );
}

export default App;
