import React, { useState, useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { BottomNavigation as BottomNav } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHamburger, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductsView from "../../views/ProductsView";
import CartView from "../../views/CartView";

const routes = [
  {
    key: "products",
    title: "Produtos",
    component: ProductsView,
    icon: ({ size, color }) => (
      <FontAwesomeIcon icon={faHamburger} size={size} color={color} />
    ),
  },
  {
    key: "cart",
    title: "Carrinho",
    component: CartView,
    icon: ({ size, color }) => (
      <FontAwesomeIcon icon={faShoppingCart} size={size} color={color} />
    ),
  },
];

export default function BottomNavigation() {
  const [{ products }, cartDispatch] = useContext(CartContext);
  const [index, setIndex] = useState(0);

  function renderScene({ route, jumpTo }) {
    if (route.key !== routes[index].key) {
      return null;
    }

    const Component = route.component;

    return <Component jumpTo={jumpTo} />;
  }

  function getBadge({ route }) {
    if (route.key == "cart" && products.length) {
      return products.length;
    }

    return false;
  }

  return (
    <BottomNav
      navigationState={{ routes, index }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      getBadge={getBadge}
    />
  );
}
