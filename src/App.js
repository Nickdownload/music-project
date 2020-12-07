
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './store'
import {renderRoutes} from 'react-router-config'
import routes from './router'
import NKHeader from './components/app-header'
import NKFooter from './components/app-footer'
import NKPlayer from './pages/player'
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <HashRouter>
      <NKHeader/>
        {renderRoutes(routes)}
      <NKFooter />
      </HashRouter>  
      <NKPlayer />  
    </div>
    </Provider>
  );
}

export default App;
