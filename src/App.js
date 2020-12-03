
import {HashRouter} from 'react-router-dom'

import {renderRoutes} from 'react-router-config'
import routes from './router'
import NKHeader from './components/app-header'
import NKFooter from './components/app-footer'
function App() {
  return (
    <div className="App">
      <HashRouter>
      <NKHeader/>
        {renderRoutes(routes)}
      <NKFooter />
      </HashRouter>
    </div>
  );
}

export default App;
