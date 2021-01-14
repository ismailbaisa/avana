import Sidebar from "./components/sidebar/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashboard from './pages/dashboard/index';
import orders from './pages/orders/index';
import { products, allproducts, categories, variations, collections } from './pages/products/index';
import { webstore, settings, google, themes, pages, seo } from './pages/webstore/index';
import { setting, store, shipping, payment, invoicing, tax } from './pages/settings/index';
import { modules, allmodules, googleshop, coupon, facebook, instagram, messenger, blogspot, twitter, whatsapp } from './pages/modules/index';




function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route path='/' exact component={ dashboard } />
        <Route path='/dashboard' exact component={ dashboard } />
        <Route path='/orders' exact component={ orders } />
        <Route path='/products' exact component={ products } />
        <Route path='/products-product-allproduct' exact component={ allproducts } />
        <Route path='/products-product-categories' exact component={ categories } />
        <Route path='/products-product-variations' exact component={ variations } />
        <Route path='/products-product-collections' exact component={ collections } />
        <Route path='/webstore' exact component={ webstore } />
        <Route path='/webstore-settings' exact component={ webstore } />
        <Route path='/webstore-settings' exact component={ settings } />
        <Route path='/webstore-google-analytic' exact component={ google } />
        <Route path='/webstore-themes' exact component={ themes } />
        <Route path='/webstore-pages' exact component={ pages } />
        <Route path='/webstore-seo' exact component={ seo } />
        <Route path='/settings' exact component={ setting } />
        <Route path='/settings-store-information' exact component={ store } />
        <Route path='/settings-shipping' exact component={ shipping } />
        <Route path='/settings-payment' exact component={ payment } />
        <Route path='/settings-invoicing' exact component={ invoicing } />
        <Route path='/settings-tax-information' exact component={ tax } />
        <Route path='/modules' exact component={ modules } />
        <Route path='/modules-all-module' exact component={ allmodules } />
        <Route path='/modules-google-shopping' exact component={ googleshop } />
        <Route path='/modules-coupon-code' exact component={ coupon } />
        <Route path='/modules-facebook' exact component={ facebook } />
        <Route path='/modules-instagram' exact component={ instagram } />
        <Route path='/modules-messenger' exact component={ messenger } />
        <Route path='/modules-blogspot' exact component={ blogspot } />
        <Route path='/modules-twitter' exact component={ twitter } />
        <Route path='/modules-whatsapp' exact component={ whatsapp } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
