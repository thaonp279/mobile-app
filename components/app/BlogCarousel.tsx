import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { FunctionComponent } from 'react';
import { Carousel } from '../basic/Carousel';
import { View } from 'react-native';
import { Skeleton, Text} from "@rneui/base";
export const BlogCarousel: FunctionComponent = () => {
    const [blogs] = useAllPrismicDocumentsByType('blog_post');
    const title = 'Explained';
    const subtitle = 'Those recommendations are based on your health diary and pregnancy week.'

    return <Carousel title={title} subtitle={subtitle} items={blogs?.map(blog => {
        const data = blog.data
        return {
            imageUrl: data['blog_image'].url,
            title: data['blog_title'][0].text,
            reasons: data['reasons'],
            uid: blog.uid?? '',
            cta: 'Read More',
            path: '/blog/[uid]',
            cardType: 'Blog',
        }
    })?? []}/>
 }