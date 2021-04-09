import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/CustomerAccessPage";
import { OffertsPage } from "./containers/OffertsPage";
import { SelectedOffertPage } from "./containers/SelectedOffertPage";
import { MyAccount } from "./containers/MyAccount";
import { ManagementPage } from "./containers/ManagementPage";
import { Basket } from "./containers/Basket";
import { History } from "./containers/History";
import { UsersManagementPage } from "./containers/UsersManagementPage";
import { CarsManagementPage } from "./containers/CarsManagementPage";
import { OrdersManagementPage } from "./containers/OrdersManagementPage";
import { AddressManagementPage } from "./containers/AddressManagementPage";
import { UpdateCarPage } from "./containers/UpdateCar";
import { AddCarPage } from "./containers/AddCar";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/account" exact component={MyAccount} />
          <Route path="/manage" exact component={ManagementPage} />
          <Route path="/manage/users" exact component={UsersManagementPage} />
          <Route path="/manage/cars" exact component={CarsManagementPage} />
          <Route path="/manage/cars/add" exact component={AddCarPage} />
          <Route
            path="/manage/cars/update/:id"
            exact
            component={UpdateCarPage}
          />
          <Route path="/manage/orders" exact component={OrdersManagementPage} />
          <Route
            path="/manage/address/:id"
            exact
            component={AddressManagementPage}
          />
          <Route path="/basket" exact component={Basket} />
          <Route path="/history" exact component={History} />
          <Route path="/cars" exact component={OffertsPage} />
          <Route path="/cars/:id" exact component={SelectedOffertPage} />
          <Route path="/:action" exact component={CustomerAccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
