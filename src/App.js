import styles from "styles/App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";


import Home from "pages/Home";
import Detail from "pages/Detail";
import Category from "pages/Category";

import Header from "components/Header";
import BasketSidebar from "components/BasketSidebar";
import Footer from "components/Footer";
import MobileBottomNav from "components/MobileBottomNav";


import useMobileDetect from "hooks/useMobileDetect";


import BasketContextProvider from "context/BasketContext";

const App = () => {
  const device = useMobileDetect();

  return (
    <Router>
      <BasketContextProvider>
        <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
          <Header />
          <main className={styles.main}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/product/:slug">
                <Detail />
              </Route>
              <Route path="/category/:slug">
                <Category />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
        <BasketSidebar />
        {device.type === "mobile" && <MobileBottomNav />}
      </BasketContextProvider>
    </Router>
  );
};

export default App;
