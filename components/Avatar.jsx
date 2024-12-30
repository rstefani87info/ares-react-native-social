import React from 'react';
import { Text, Image, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

Avatar.propTypes = {
    imageUrl : PropTypes.string,
    name : PropTypes.string,
    size : PropTypes.number,
    style : PropTypes.shapeOf({
        wrapper:PropTypes.object,
        image:PropTypes.object,
        name:PropTypes.object,
    }),

}
export default function Avatar ({ imageUrl, name, size = 80, style,  ...props }) {
    const [isError, setIsError] = useState(false);
    const imageStyle=[style?.image || {}, styles.image, { width: size - 10, height: size - 10, borderRadius: (size - 10) / 2 , fontSize: size - 10}];
  return (
    <Pressable style={[style?.wrapper || {}, styles.container, { width: size, height: size, borderRadius: size / 2 }]} {...props}>
      {!isError ? (<Image
        source={{ uri: imageUrl }}
        style={imageStyle}
        onError={() => setIsError(true)}
        alt={name?.charAt(0)}
      />) :(
        <Text style={imageStyle}>{name}</Text>
      )}
      <Text style={[style?.name || {},styles.name]}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  name: {
    position: 'absolute',
    bottom: -10,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});