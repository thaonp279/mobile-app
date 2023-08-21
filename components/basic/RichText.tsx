import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react/dist/react-server/PrismicRichText";
import { Text } from "@rneui/base";
import { TextProps } from "react-native";
import { GlobalStyle, GlobalText } from "../../constants/GlobalStyle";
import { RichImage } from "./RichImage";

export function RichText(props: { field: prismic.RichTextField } & TextProps) {
  const { field, ...rest } = props;
  return (
    <PrismicRichText
      field={field}
      components={{
        // TODO: add the remaining items: list, listItem, etc.
        heading1: ({ children }) => (
          <Text {...rest} h1 style={{ fontFamily: "CrimsonPro_200ExtraLight" }}>
            {children}
          </Text>
        ),
        heading2: ({ children }) => (
          <Text {...rest} h2 style={{ fontFamily: "CrimsonPro_200ExtraLight" }}>
            {children}
          </Text>
        ),
        heading3: ({ children }) => (
          <Text {...rest} h3 style={{ fontFamily: "CrimsonPro_200ExtraLight" }}>
            {children}
          </Text>
        ),
        heading4: ({ children }) => (
          <Text {...rest} h4 style={{ fontFamily: "CrimsonPro_200ExtraLight" }}>
            {children}
          </Text>
        ),
        strong: ({ children }) => (
          <Text style={{ fontWeight: "bold" }}>{children}</Text>
        ),
        paragraph: ({ children }) => <Text {...rest} style={GlobalText.regular}>{children}</Text>,
        image: (data) => {
          return <RichImage field={data.node} style={GlobalStyle.blogImage} />;
        },
      }}
    />
  );
}
