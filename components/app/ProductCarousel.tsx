import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { FunctionComponent } from "react";
import { Carousel } from "../basic/Carousel";

export const ProductCarousel: FunctionComponent = () => {
    const [products] = useAllPrismicDocumentsByType('product');
    const title = 'Products for You'
    const subtitle = 'Those recommendations are based on your health diary and pregnancy week.'

    return <Carousel title={title} subtitle={subtitle} items={products?.map(product => {
        const data = product.data;
        return {
            imageUrl: data['product_image'].url,
            title: data['product_name'][0].text,
            reasons: data['reasons']?? [],
            cta: 'Shop Now',
            path: '/product/[uid]',
            cardType: 'Product',
            uid: product.uid?? ''
        }
    })?? []} />
}