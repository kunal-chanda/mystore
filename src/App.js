import { Outlet } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
    
  );
}

export default App;
