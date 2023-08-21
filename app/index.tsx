import { ScrollView, StyleSheet, View } from "react-native";
import { BlogCarousel } from "../components/app/BlogCarousel";
import { ProductCarousel } from "../components/app/ProductCarousel";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
});

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 25 }}
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <BlogCarousel />
        <ProductCarousel />
      </View>
    </ScrollView>
  );
}
