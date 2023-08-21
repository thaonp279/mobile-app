import { ScrollView, StyleSheet, View } from "react-native";
import { BlogCarousel } from "../components/app/BlogCarousel";
import { ProductCarousel } from "../components/app/ProductCarousel";
import { GlobalStyle } from "../constants/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});

export default function Home() {
  return (
    <ScrollView>
      <View style={[GlobalStyle.page, styles.container]}>
        <BlogCarousel />
        <ProductCarousel />
      </View>
    </ScrollView>
  );
}
