import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Skeleton } from "@rneui/base";
import { ScrollView, StyleSheet } from "react-native";
import { PreviewCard } from "../components/PreviewCard";
import { GlobalStyle } from "../constants/GlobalStyle";

const styles = StyleSheet.create({
    card: {
        height: 275,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    thumbnail: {
        height: 150,
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    },

    titleBox: {
        position: 'absolute',
        bottom: 10,
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    tag: {
        fontSize: 12,
        color: 'white'
    },
    content: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        height: 125,
        width: '100%',
    },

})

export default function Home() {
    const [documents] = useAllPrismicDocumentsByType('blog_post');

    if (!documents || !documents[0]) {
        return (
            <Skeleton />
        )
    }
    const document = documents[0]
    return (
        <ScrollView style={GlobalStyle.page}>
            {documents.map(d => {
                const data = d.data
                return <PreviewCard
                    key={d.uid}
                    imageUrl={data.blog_image.url}
                    title={data.blog_title[0].text}
                    reasons={['reason 1', 'reason 2']}
                    cta={'Read More'}
                    path={`/blog/[uid]`}
                    cardType="Blog Post"
                    uid={d.uid?? ''}
                />
            })}
        </ScrollView>
    )
}