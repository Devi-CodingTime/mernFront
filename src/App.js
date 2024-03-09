
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import TransactionDetail from './components/statistics/transactionDetail';
import BarChart from './components/barcharts/barChart';
function App() {
  return (<>
  <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/statistics' element={<TransactionDetail/>}/>
    <Route exact path='/barchart' element={<BarChart/>}/>

  </Routes>
  </>
    
  );
}

export default App;
