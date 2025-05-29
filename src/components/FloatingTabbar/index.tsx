import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Text,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {FoodIcon, GameIcon, IpadIcon, ShirtIcon} from '../../assets/svgs';
import styles from './styles';

const FloatingTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [expanded, setExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState('false');
  const expandAnim = React.useRef(new Animated.Value(0)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    if (expanded) {
      // Collapse animation
      Animated.parallel([
        Animated.timing(expandAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      // Expand animation
      Animated.parallel([
        Animated.timing(expandAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
    setExpanded(!expanded);
  };

  const heightInterpolation = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 200], // Adjust height as needed
  });

  const blurOpacity = opacityAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const changeActiveMenu = (title: string) => {
    setActiveMenu(prev => (prev === title ? '' : title));
  };

  return (
    <>
      {/* Blur Overlay */}
      {expanded && (
        <TouchableOpacity
          activeOpacity={1}
          style={StyleSheet.absoluteFill}
          onPress={toggleExpand}>
          <Animated.View style={{opacity: blurOpacity, flex: 1}}>
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="xlight"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          </Animated.View>
        </TouchableOpacity>
      )}

      {/* Floating Tab Bar */}
      <Animated.View style={[styles.tabBar]}>
        {/* Expanded Content */}
        {expanded && (
          <Animated.View
            style={[styles.expandedContent, {opacity: expandAnim}]}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => changeActiveMenu('Fashion')}>
              <View
                style={[
                  styles.optionCircle,
                  {
                    backgroundColor:
                      activeMenu === 'Fashion' ? '#FFB332' : '#fff',
                  },
                ]}>
                <ShirtIcon />
              </View>
              <Text style={styles.optionText}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => changeActiveMenu('Gadgets')}>
              <View
                style={[
                  styles.optionCircle,
                  {
                    backgroundColor:
                      activeMenu === 'Gadgets' ? '#FFB332' : '#fff',
                  },
                ]}>
                <IpadIcon />
              </View>
              <Text style={styles.optionText}>Gadgets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => changeActiveMenu('Food')}>
              <View
                style={[
                  styles.optionCircle,
                  {
                    backgroundColor: activeMenu === 'Food' ? '#FFB332' : '#fff',
                  },
                ]}>
                <FoodIcon />
              </View>
              <Text style={styles.optionText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => changeActiveMenu('Game')}>
              <View
                style={[
                  styles.optionCircle,
                  {
                    backgroundColor: activeMenu === 'Game' ? '#FFB332' : '#fff',
                  },
                ]}>
                <GameIcon />
              </View>
              <Text style={styles.optionText}>Game</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        <View style={styles.mainTab}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }

              // Toggle expand on center tab press
              if (index === Math.floor(state.routes.length / 2)) {
                toggleExpand();
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                // testID={options.tabBarTestID}
                onPress={onPress}
                style={[
                  styles.tabButton,
                  index === Math.floor(state.routes.length / 2) &&
                    styles.centerTab,
                  [route.name, options.title].includes('Home')
                    ? {
                        backgroundColor: '#FF710D',
                        borderRadius: 9999,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                      }
                    : {},
                ]}>
                {options.tabBarIcon?.({
                  focused: isFocused,
                  color: isFocused ? '#673ab7' : '#222',
                  size: 24,
                })}
                {[route.name, options.title].includes('Home') ? (
                  <Text style={[styles.tabLabel, {color: '#fff'}]}>
                    {options.title || route.name}
                  </Text>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>
    </>
  );
};

export default FloatingTabBar;
