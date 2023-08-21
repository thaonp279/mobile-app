import { FunctionComponent } from "react";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { FlatList, StyleSheet } from "react-native";

export const Carousel: FunctionComponent<CarouselItemProps[]> = (data) => {
    return  <FlatList
    contentContainerStyle={styles.container}
        data={data}
        renderItem={({item}) => {
            return <CarouselItem
            key={item.uid}
            imageUrl={item.imageUrl}
            title={item.title}
            reasons={item.reasons}
            cta={item.cta}
            path={item.path}
            cardType={item.cardType}
            uid={item.uid}
        />
        }}
        horizontal
        keyExtractor={item => item.uid}
        showsHorizontalScrollIndicator={false}
        />
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    }

})
