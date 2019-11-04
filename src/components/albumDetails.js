import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ recordAlbum }) => {
    const { title, artist, thumbnail_image, image, url } = recordAlbum;
    const { thumbnail_imageStyle, 
            headerContentStyle, 
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
     } = styles;

        return (
            <Card>
            <CardSection>
            <View style={thumbnailContainerStyle}>
            <Image
                // eslint-disable-next-line camelcase
                style={thumbnail_imageStyle}
                source={{ uri: thumbnail_image }}
            />
            </View>
            <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text style={headerTextStyle}>{artist}</Text>
            </View>
            </CardSection>
            <CardSection>
            <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
            <Button onPress={() => Linking.openURL(url)} >
            Buy Now
            </Button>
            </CardSection>
            </Card>
        );
        };

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        jsutifyContent: 'space-around'
    },
    thumbnail_imageStyle: {
        height: 40,
        width: 40
    },
    headerTextStyle: {
        fontSize: 20
    },
    imageStyle: {
     height: 300,
     width: '100%'
    },
    thumbnailContainerStyle: {
        jsutifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    }

};    

export default AlbumDetail;
