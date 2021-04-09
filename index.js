import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";
import ProductProvider from "./app/ui/providers/ProductProvider";
import CartProvider from "./app/ui/providers/CartProvider";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./app/ui/styles/theme";

function Index() {
  return (
    <PaperProvider theme={theme}>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Index);
