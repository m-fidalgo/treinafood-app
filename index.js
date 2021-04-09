import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./app/ui/styles/theme";

function Index() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Index);
