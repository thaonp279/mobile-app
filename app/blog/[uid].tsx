import { usePrismicDocumentByUID } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RichImage } from "../../components/basic/RichImage";
import { RichText } from "../../components/basic/RichText";
import { GlobalStyle } from "../../constants/GlobalStyle";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  scrollView: {},
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
    <ScrollView contentContainerStyle={{ ...GlobalStyle.page }} style={{backgroundColor: 'white'}}>
      <RichImage field={document?.data.blog_image} style={styles.image} />
      <RichText field={document?.data.blog_title} />
      <RichText field={document?.data.estimated_time} />
      <RichText field={document?.data.blog_content} />
    </ScrollView>
  );
}
