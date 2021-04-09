import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Checkbox, Button } from "react-native-paper";
import { TextInputStyled } from "./index.styled";

import { ProductContext } from "../../providers/ProductProvider";
import { productSelect } from "../../../data/actions/ProductActions";
import { CartContext } from "../../providers/CartProvider";
import { cartAddProduct } from "../../../data/actions/CartActions";

export default function ProductInfoView() {
  const [{ selectedProduct }, productDispacth] = useContext(ProductContext);
  const [cartState, cartDispatch] = useContext(CartContext);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [obs, setObs] = useState("");

  function isOptionSelected(op) {
    return selectedOptions.includes(op);
  }

  function toggleOption(op) {
    let newOptions;

    if (isOptionSelected(op)) {
      newOptions = selectedOptions.filter((item) => item !== op);
    } else {
      newOptions = [...selectedOptions, op];
    }

    setSelectedOptions(newOptions);
  }

  function sendToCart() {
    const { id, name, price } = selectedProduct;

    cartDispatch(
      cartAddProduct({
        product: { id, name, price },
        obs,
        selectedOptions,
      })
    );

    goBack();
  }

  function goBack() {
    productDispacth(productSelect(null));
  }

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Opções</List.Subheader>

        {selectedProduct.options.map((op) => (
          <List.Item
            key={op}
            title={op}
            right={(props) => (
              <Checkbox
                {...props}
                status={isOptionSelected(op) ? "checked" : "unchecked"}
                onPress={() => toggleOption(op)}
              />
            )}
          />
        ))}
      </List.Section>

      <TextInputStyled
        label="Observações"
        mode="outlined"
        multiline={true}
        value={obs}
        onChangeText={setObs}
      />

      <Button onPress={sendToCart}>Adicionar ao Carrinho</Button>
    </ScrollView>
  );
}
