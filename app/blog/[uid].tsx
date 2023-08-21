import { usePrismicDocumentByUID } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View, ScrollView } from "react-native";
import { RichImage } from "../../components/basic/RichImage";
import { RichText } from "../../components/basic/RichText";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
});
export default function BlogPost() {
  const { uid } = useLocalSearchParams();
  const [document, { state }] = usePrismicDocumentByUID(
    "blog_post",
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
      <RichImage field={document?.data.blog_image} style={styles.image} />
      <RichText field={document?.data.blog_title} />
      <View style={{ marginBottom: 25 }}>
        <RichText field={document?.data.estimated_time} />
      </View>
      <RichText field={document?.data.blog_content} />
    </ScrollView>
  );
}
