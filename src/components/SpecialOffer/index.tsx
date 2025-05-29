import {
  View,
  TextInput,
  Text,
  Image,
  ImageSourcePropType,
  ColorValue,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';

interface ISpecialOffer {
  image?: ImageSourcePropType;
  imageBg?: ImageSourcePropType;
  title: string;
  description: string;
  backgroundColor?: ColorValue;
  titleColor?: ColorValue;
  descriptionColor?: ColorValue;
}

export default function SpecialOffer({
  image,
  imageBg,
  title,
  description,
  backgroundColor,
  titleColor,
  descriptionColor,
}: ISpecialOffer) {
  return (
    <>
      {imageBg ? (
        <ImageBackground
          source={imageBg}
          style={{borderRadius: 10, overflow: 'hidden'}}>
          <View style={[styles.promoBanner]}>
            <View>
              <View style={styles.specialbox}>
                <Text style={styles.special}>Special</Text>
              </View>
              <Text
                style={[
                  styles.promoTitle,
                  {color: titleColor ? titleColor : styles.promoTitle.color},
                ]}>
                {title}
              </Text>
              <Text
                style={[
                  styles.promoText,
                  {
                    color: descriptionColor
                      ? descriptionColor
                      : styles.promoText.color,
                  },
                ]}>
                {description}
              </Text>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <View style={[styles.promoBanner, {backgroundColor: backgroundColor}]}>
          <View>
            <View style={styles.specialbox}>
              <Text style={styles.special}>Special</Text>
            </View>
            <Text
              style={[
                styles.promoTitle,
                {color: titleColor ? titleColor : styles.promoTitle.color},
              ]}>
              {title}
            </Text>
            <Text
              style={[
                styles.promoText,
                {
                  color: descriptionColor
                    ? descriptionColor
                    : styles.promoText.color,
                },
              ]}>
              {description}
            </Text>
          </View>

          <View>
            <Image source={image} style={styles.image} />
          </View>
        </View>
      )}
    </>
  );
}
