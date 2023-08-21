import { Text } from "@rneui/base";
import { FunctionComponent } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";

export const Carousel: FunctionComponent<{
  items: CarouselItemProps[];
  title: string;
  subtitle: string;
}> = ({ items, title, subtitle }) => {
  return (
    <View>
      <Text h3 h3Style={styles.h3}>
        {title}
      </Text>
      <Text style={styles.regular}>{subtitle}</Text>
      <FlatList
        contentContainerStyle={styles.container}
        data={items}
        renderItem={({ item }) => {
          return (
            <CarouselItem
              key={item.uid}
              imageUrl={item.imageUrl}
              title={item.title}
              reasons={item.reasons}
              cta={item.cta}
              path={item.path}
              cardType={item.cardType}
              uid={item.uid}
            />
          );
        }}
        horizontal
        keyExtractor={(item) => item.uid}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    padding: 3,
    paddingTop: 10
  },
  h3: {
    fontSize: 30,
    fontFamily: "CrimsonPro_200ExtraLight",
  },
  regular: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 13,
  },
});
