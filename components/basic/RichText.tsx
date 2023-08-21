import { PrismicRichText } from "@prismicio/react/dist/react-server/PrismicRichText"
import { Text } from "@rneui/base"
import * as prismic from "@prismicio/client";
import { TextProps } from "react-native";

export function RichText(props: { field: prismic.RichTextField } & TextProps) {
    const { field, ...rest } = props
    return <PrismicRichText field={field} components={{
        heading1: ({ children }) => <Text {...rest} h1>{children}</Text>,
        heading2: ({ children }) => <Text {...rest} h2>{children}</Text>,
        heading3: ({ children }) => <Text {...rest} h3>{children}</Text>,
        heading4: ({ children }) => <Text {...rest} h4>{children}</Text>,
        paragraph: ({ children }) => <Text {...rest}>{children}</Text>
    }} />
}