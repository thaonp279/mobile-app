import { usePrismicDocumentByUID } from "@prismicio/react";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RichImage } from "../../components/basic/RichImage";
import { RichText } from "../../components/basic/RichText";
import { Skeleton } from "../../components/app/Skeleton";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  button: { backgroundColor: "#ba9c8e", borderRadius: 20, padding: 10, marginTop: 10, marginBottom: 10 },
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
      contentContainerStyle={{ padding: 25 }}
      style={{ backgroundColor: "white" }}
    >
      <RichImage field={document?.data.product_image} style={styles.image} />
      <RichText field={document?.data.product_name} />
      <Text style={{fontFamily: 'Montserrat_400Regular'}}>{document?.data.price}€</Text>
      {document?.data.shop_url.url && (
        <Link href={document?.data.shop_url.url} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </Pressable>
        </Link>
      )}
      <RichText field={document?.data.product_description} />
    </ScrollView>
  );
}
