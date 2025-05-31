import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ColorValue,
  ImageBackground,
  Animated,
  Easing,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';

interface ISpecialOffer {
  specialType: string;
  image?: ImageSourcePropType;
  imageBg?: ImageSourcePropType;
  title: string;
  description: string;
  backgroundColor?: ColorValue;
  titleColor?: ColorValue;
  descriptionColor?: ColorValue;
  imageStyle?: StyleProp<ImageStyle>;
}

interface SpecialOfferCarouselProps {
  offers: ISpecialOffer[];
  interval?: number;
}

export default function SpecialOffer({
  offers,
  interval = 3000,
}: SpecialOfferCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (offers.length <= 1) return;

    const timer = setInterval(() => {
      // Fade out current offer
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        // Change to next offer
        setCurrentIndex(prevIndex => (prevIndex + 1) % offers.length);
        // Fade in new offer
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      });
    }, interval);

    return () => clearInterval(timer);
  }, [offers.length, interval, fadeAnim]);

  if (offers.length === 0) return null;

  const currentOffer = offers[currentIndex];

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        height: 150,
        overflow: 'hidden',
        width: '100%',
      }}>
      {currentOffer.imageBg ? (
        <ImageBackground
          source={currentOffer.imageBg}
          style={[styles.promoBanner]}>
          <View>
            <View style={styles.specialbox}>
              <Text style={styles.special}>{currentOffer.specialType}</Text>
            </View>
            <Text
              style={[
                styles.promoTitle,
                {
                  color: currentOffer.titleColor
                    ? currentOffer.titleColor
                    : styles.promoTitle.color,
                },
              ]}>
              {currentOffer.title}
            </Text>
            <Text
              style={[
                styles.promoText,
                {
                  color: currentOffer.descriptionColor
                    ? currentOffer.descriptionColor
                    : styles.promoText.color,
                },
              ]}>
              {currentOffer.description}
            </Text>
          </View>
          <View style={[styles.image, currentOffer.imageStyle]} />
        </ImageBackground>
      ) : (
        <View
          style={[
            styles.promoBanner,
            {backgroundColor: currentOffer.backgroundColor},
          ]}>
          <View>
            <View style={styles.specialbox}>
              <Text style={styles.special}>{currentOffer.specialType}</Text>
            </View>
            <Text
              style={[
                styles.promoTitle,
                {
                  color: currentOffer.titleColor
                    ? currentOffer.titleColor
                    : styles.promoTitle.color,
                },
              ]}>
              {currentOffer.title}
            </Text>
            <Text
              style={[
                styles.promoText,
                {
                  color: currentOffer.descriptionColor
                    ? currentOffer.descriptionColor
                    : styles.promoText.color,
                },
              ]}>
              {currentOffer.description}
            </Text>
          </View>

          {currentOffer.image && (
            <View>
              <Image
                source={currentOffer.image}
                style={[styles.image, currentOffer.imageStyle]}
              />
            </View>
          )}
        </View>
      )}
    </Animated.View>
  );
}
