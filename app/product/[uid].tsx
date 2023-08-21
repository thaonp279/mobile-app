import { usePrismicDocumentByUID } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyle } from "../../constants/GlobalStyle";
import { RichImage } from "../../components/basic/RichImage";
import { RichText } from "../../components/basic/RichText";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  scrollView: {},
  button: { backgroundColor: "#ba9c8e", borderRadius: 20, padding: 10 },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
export default function ProductPage() {
  const { uid } = useLocalSearchParams();
  const [document, { state }] = usePrismicDocumentByUID(
    "product",
    uid as string
  );

  if (state === "loading") {
    return <Skeleton />;
  }

  return (
    <ScrollView
      contentContainerStyle={{ ...GlobalStyle.page }}
      style={{ backgroundColor: "white", ...GlobalStyle.regularFont }}
    >
      <RichImage field={document?.data.product_image} style={styles.image} />
      <RichText field={document?.data.product_name} />
      <Text>{document?.data.price}€</Text>
      {document?.data.shop_url.url && <Link
        href={document?.data.shop_url.url}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </Pressable>
      </Link>}
      <RichText field={document?.data.product_description} />
    </ScrollView>
  );
}
