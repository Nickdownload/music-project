import {HashRouter,Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router'
import NKHeader from './components/app-header'
import NKFooter from './components/app-footer'
function App() {
  return (
    <div className="App">
      <NKHeader />
       <HashRouter>
        {renderRoutes(routes)}
       </HashRouter>
      <NKFooter />
    </div>
  );
}

export default App;
