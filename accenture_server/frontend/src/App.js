import logo from './logo.svg';
import './App.css';
import Products from './components/Products/products.jsx'
import OrderPayments from './components/ordersAndPayment/orderAndPayments.jsx'
import UserOrders from './components/UserOrders/userOrders.jsx'
import NavMenu from './components/nav.jsx'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return(
    

    <Router> 
    <div className="bg">
    <h1 className="title"> DASHBOARD </h1>
    </div>
    <NavMenu/>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/order" component={OrderPayments} />
        <Route path="/user" component={UserOrders} />
      </Switch>
    </Router>




  )
}

export default App;
