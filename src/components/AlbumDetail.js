import React, { PropTypes } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { 
    textContainer, 
    thumbnail, 
    thumbnailContainer,
    headerTitle,
    imageContainer
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image 
            style={thumbnail} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainer}>
          <Text style={headerTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={imageContainer}
          source={{ uri: image }} 
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} text='Buy Now' />
      </CardSection>
    </Card> 
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageContainer: {
    height: 300,
    width: null,
    flex: 1
  }
};

AlbumDetail.propTypes = {
  title: PropTypes.string, 
  artist: PropTypes.string
};

export default AlbumDetail;
