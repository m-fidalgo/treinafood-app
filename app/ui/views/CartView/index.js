import React, { useContext, useState } from "react";
import { NumberService } from "../../../data/services/NumberService";
import { ApiService } from "../../../data/services/ApiService";
import { CartContext } from "../../providers/CartProvider";
import { cartClear, cartRemoveProduct } from "../../../data/actions/CartActions";
import { IconButton, List, Button, Paragraph, Snackbar } from "react-native-paper";
import { SafeAreaView, ScrollView, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../components/TopBar";

export default function CartView(props) {
  const [{ products }, cartDispatch] = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  function removeFromCart(item) {
    cartDispatch(cartRemoveProduct(item));
  }

  function getTotal() {
    const value = products
      .map((item) => item.product.price)
      .reduce((prev, curr) => prev + curr, 0);

    return NumberService.currency(value);
  }

  function finish() {
    ApiService.post("orders", {
      pedido: products,
    });

    cartDispatch(cartClear());

    setIsVisible(true);
  }

  if (products.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopBar title="Carrinho" />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Paragraph>Seu carrinho está vazio!</Paragraph>
        </View>

        <Snackbar
          visible={isVisible}
          onDismiss={() => setIsVisible(false)}
          duration={3000}
        >
          Seu pedido foi enviado!
        </Snackbar>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar title="Carrinho" />
      <ScrollView>
        <List.Section>
          {products.map((item, index) => (
            <List.Item
              key={index}
              title={item.product.name}
              description={NumberService.currency(item.product.price)}
              right={() => (
                <IconButton
                  onPress={() => removeFromCart(item)}
                  icon={({ size, color }) => (
                    <FontAwesomeIcon icon={faTimes} size={size} color={color} />
                  )}
                />
              )}
            />
          ))}
        </List.Section>

        <Button onPress={finish}>Finalizar Compra - {getTotal()}</Button>
      </ScrollView>
    </SafeAreaView>
  );
}
