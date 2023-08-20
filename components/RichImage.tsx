import { Image, ImageProps } from 'react-native'
import * as prismic from "@prismicio/client";

export function RichImage(props: { field: prismic.ImageFieldImage | null | undefined } & Omit<ImageProps, 'source'>) {
    const {field, ...rest} = props
    return <Image {...rest} source={{ uri: field?.url!, width: field?.dimensions?.width , height: field?.dimensions?.height }} />
}