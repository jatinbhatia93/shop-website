import './App.css';
import 'primeflex/primeflex.css';
import NavBar from './components/NavBar/navbar';
import Home from './pages/Home/home';
import { Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList/productList';
import Cart from './pages/Cart/cart';
import { Component } from 'react';
import { productImageMapping } from './Contants/productList.const';
import '@fortawesome/fontawesome-free/js/all.min.js';

class App extends Component {
  state = {
    products: [...productImageMapping].map(p => { return { quantity: 0, price: 20, ...p } }),
    cart: []
  }

  handleAddCart = (product, quantity) => {
    product.quantity = quantity;
    const cart = [...this.state.cart];
    cart.push(product);
    this.setState({ cart });
    this.updateProductList(product, quantity);
  }

  handleUpdateCart = (product, quantity) => {
    if (product.quantity !== quantity) {
      product.quantity = quantity;
      const cart = [...this.state.cart];
      cart.some(p => {
        if (p.name === product.name) {
          p.quantity = quantity;
          return true;
        }
        return false;
      });
      this.setState({ cart });
      this.updateProductList(product, quantity);
    }
  }

  updateProductList = (product, quantity) => {
    const { products } = this.state;
    products.some(p => {
      if (p.name === product.name) {
        p.quantity = quantity;
        return true;
      }
      return false;
    });
    this.setState({ products });
  }

  handleDelete = (product) => {
    this.updateQuantityInCart(product,0);
    this.updateProductList(product,0);
  }

  updateQuantityInCart = (product, quantity) => {
    const { cart } = this.state;
    let index = null;
    cart.some((p, i) => {
      if (p.name === product.name) {
        if (quantity) {
          p.quantity = quantity;
        } else {
          index = i;
        }
        return true;
      }
      return false;
    });
    if (quantity === 0) {
      cart.splice(index,1);
    };
    this.setState({ cart });
  }

  render() {
    return (
      <div className="App width-100p">
        <NavBar cartItems={this.state.cart} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductList
              data={this.state.products}
              onAddCart={this.handleAddCart}
              onQuantityChange={this.handleUpdateCart}
              onDelete={this.handleDelete}
            />
          </Route>
          <Route path="/products/:brandName">
            <ProductList
              data={this.state.products}
              onAddCart={this.handleAddCart}
              onQuantityChange={this.handleUpdateCart}
              onDelete={this.handleDelete}
            />
          </Route>
          <Route>
            <Cart path="/cart" data={this.state.cart} />
          </Route>
        </Switch>
      </div>
    );
  };
}

export default App;
