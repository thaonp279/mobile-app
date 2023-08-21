import {
  CrimsonPro_200ExtraLight,
  CrimsonPro_300Light,
  CrimsonPro_400Regular,
} from "@expo-google-fonts/crimson-pro";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PrismicProvider } from "@prismicio/react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "react-native-url-polyfill/auto";
import { Logo } from "../components/app/Logo";
import { client } from "../prismic";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Montserrat_400Regular,
    Montserrat_700Bold,
    CrimsonPro_300Light,
    CrimsonPro_400Regular,
    CrimsonPro_200ExtraLight,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PrismicProvider client={client}>
      <RootLayoutNav />
    </PrismicProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerBackTitle: "",
          headerTitle: (_) => <Logo />,
          headerBackTitleVisible: false,
          headerTintColor: "grey",
        }}
      ></Stack>
    </ThemeProvider>
  );
}
