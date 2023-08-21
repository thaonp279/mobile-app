import { Href, Link } from "expo-router";
import { FunctionComponent } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyle, GlobalText } from "../../constants/GlobalStyle";

export type CarouselItemProps = {
  cardType: string;
  imageUrl: string;
  title: string;
  reasons: string;
  cta: string;
  path: Href<any>;
  uid: string;
};

export const CarouselItem: FunctionComponent<CarouselItemProps> = ({
  imageUrl,
  title,
  reasons,
  cta,
  path,
  cardType,
  uid,
}) => {
  return (
    <View style={[styles.card, GlobalStyle.shadow]}>
      <View style={styles.thumbnail}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[GlobalText.tiny, styles.tag]}>{cardType}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={[GlobalText.tiny, GlobalText.bold]}>
            Shown to you because of:
          </Text>
          <Text style={GlobalText.tiny}>{`\u2022 ${reasons}`}</Text>
        </View>
        <Link
          href={{
            pathname: path,
            params: { uid },
          }}
          asChild
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{cta}</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 275,
    width: 200,
    borderRadius: 10,
    backgroundColor: "white",
  },
  thumbnail: {
    height: 150,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  titleBox: {
    position: "absolute",
    bottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  tag: {
    color: "white",
  },
  content: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    height: 125,
    width: "100%",
    fontFamily: "Montserrat_400Regular",
  },
  button: { backgroundColor: "#ba9c8e", borderRadius: 15, padding: 5 },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
