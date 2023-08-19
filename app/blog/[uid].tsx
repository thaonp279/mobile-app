import { PrismicImage, PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/GlobalStyle";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
        objectFit: 'cover',
        borderRadius: 10
    },
});
export default function BlogPost() {
    const { uid } = useLocalSearchParams();
    const [document, { state }] = usePrismicDocumentByUID('blog_post', uid as string)

    if (state === 'loading') {
        return (
            <Skeleton />
        )
    }

    return (
        <ScrollView style={GlobalStyle.page}>
            <div style={GlobalStyle.regularFont}>
                <PrismicImage field={document?.data.blog_image} style={styles.image} />
                <PrismicRichText field={document?.data.blog_title} />
                <PrismicRichText field={document?.data.estimated_time} />
                <PrismicRichText field={document?.data.blog_content} />
            </div>
        </ScrollView>
    )
}