import {renderRoutes, MainRoutes} from './routers'
function App() {
  return (
    <div className="App">
      {renderRoutes(MainRoutes)}
    </div>
  );
}

export default App;
