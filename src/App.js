import {renderRoutes, MainRoutes} from './routers'
import {connect} from 'react-redux'
function App({user}) {
  return (
    <div className="App">
      {renderRoutes(MainRoutes, user.role)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
