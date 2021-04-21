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
import { ProtectedRoute } from "./components/protectedRoute";
import { UnautorizedPage } from "./containers/UnautorizedPage";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <ProtectedRoute path="/account" exact component={MyAccount} />
          <ProtectedRoute path="/manage" exact component={ManagementPage} />
          <ProtectedRoute
            path="/manage/users"
            exact
            component={UsersManagementPage}
          />
          <ProtectedRoute
            path="/manage/cars"
            exact
            component={CarsManagementPage}
          />
          <ProtectedRoute
            path="/manage/cars/add"
            exact
            component={AddCarPage}
          />
          <ProtectedRoute
            path="/manage/cars/update/:id"
            exact
            component={UpdateCarPage}
          />
          <ProtectedRoute
            path="/manage/orders"
            exact
            component={OrdersManagementPage}
          />
          <ProtectedRoute
            path="/manage/address/:id"
            exact
            component={AddressManagementPage}
          />
          <Route path="/unauthorized" exact component={UnautorizedPage} />
          <ProtectedRoute path="/basket" exact component={Basket} />
          <ProtectedRoute path="/history" exact component={History} />
          <Route path="/cars" exact component={OffertsPage} />
          <Route path="/cars/:id" exact component={SelectedOffertPage} />
          <Route path="/:action" exact component={CustomerAccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
