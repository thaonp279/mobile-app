import { Text } from "@rneui/base";
import { FunctionComponent } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GlobalText } from "../../constants/GlobalStyle";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";

export const Carousel: FunctionComponent<{
  items: CarouselItemProps[];
  title: string;
  subtitle: string;
}> = ({ items, title, subtitle }) => {
  return (
    <View>
      <Text h3 h3Style={GlobalText.h3}>{title}</Text>
      <Text style={GlobalText.regular}>{subtitle}</Text>
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
  },
});
