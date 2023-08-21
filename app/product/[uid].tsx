import { usePrismicDocumentByUID } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";
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
});
export default function ProductPage() {
  const { uid } = useLocalSearchParams();
  const [document, { state }] = usePrismicDocumentByUID(
    "product",
    uid as string,
  );

  if (state === "loading") {
    return <Skeleton />;
  }
  console.log(document?.data)

  return (
    <ScrollView style={{ ...GlobalStyle.page, ...GlobalStyle.regularFont }}>
      <RichImage field={document?.data.product_image} style={styles.image} />
      <RichText field={document?.data.product_name} />
      <Text>{document?.data.price}</Text>
      <RichText field={document?.data.product_description} />
    </ScrollView>
  );
}
