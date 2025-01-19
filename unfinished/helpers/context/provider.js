import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import ContextProvider from "./context";
import Routes from "../../app/pages/routes/routes";

const queryClient = new QueryClient();

const Provider = () => {

    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer >
                    <ContextProvider>
                        <Routes></Routes>
                    </ContextProvider>
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    )
}

export default Provider