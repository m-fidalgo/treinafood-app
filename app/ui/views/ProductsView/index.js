import React, { useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import { Paragraph, Button } from "react-native-paper";
import { SafeAreaViewStyled, CardStyled } from "./index.styled";
import TopBar from "../../components/TopBar";
import ProductInfoView from "../ProductInfoView";

import { ApiService } from "../../../data/services/ApiService";
import { NumberService } from "../../../data/services/NumberService";

import { ProductContext } from "../../providers/ProductProvider";
import { productsResponse, productSelect } from "../../../data/actions/ProductActions";

export default function ProductsView(props) {
  const [{ productList, selectedProduct }, productDispacth] = useContext(ProductContext);
  const noImg = "";

  useEffect(() => {
    ApiService.get("products").then((products) =>
      productDispacth(productsResponse(products))
    );
  }, []);

  function selectProduct(product) {
    productDispacth(productSelect(product));
  }

  if (selectedProduct) {
    return (
      <SafeAreaViewStyled>
        <TopBar
          back={true}
          onPress={() => selectProduct(null)}
          title={selectedProduct.name}
        />
        <ProductInfoView />
      </SafeAreaViewStyled>
    );
  }

  return (
    <SafeAreaViewStyled>
      <TopBar title={"Produtos"} />
      <ScrollView>
        {productList.map((item) => (
          <CardStyled key={item.id}>
            <CardStyled.Cover source={{ uri: item.picture || noImg }} />
            <CardStyled.Title
              title={item.name}
              right={(props) => (
                <Button onPress={() => selectProduct(item)}>Selecionar</Button>
              )}
            />
            <CardStyled.Content>
              <Paragraph>{NumberService.currency(item.price)}</Paragraph>
            </CardStyled.Content>
          </CardStyled>
        ))}
      </ScrollView>
    </SafeAreaViewStyled>
  );
}
