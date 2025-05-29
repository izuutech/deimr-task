import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const ProfilePage = () => {
  const carPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateCar = () => {
      carPosition.setValue(-100); // Start from left outside the screen
      Animated.loop(
        Animated.timing(carPosition, {
          toValue: Dimensions.get('window').width + 100,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    animateCar();
  }, []);

  // Render the car using simple shapes
  const renderCar = () => {
    return (
      <Animated.View
        style={[
          styles.carContainer,
          {
            transform: [{translateX: carPosition}],
          },
        ]}>
        {/* Car body */}
        <View style={styles.carBody} />
        {/* Car top */}
        <View style={styles.carTop} />
        {/* Wheels */}
        <View style={styles.wheel1} />
        <View style={styles.wheel2} />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF6D00" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar} />

        <Text style={styles.name}>Joshua Izu</Text>
        <Text style={styles.title}>Senior React Native Developer</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>San Francisco, CA</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>contact@joshuaizu.com</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Experience</Text>
            <Text style={styles.detailValue}>8 years</Text>
          </View>
        </View>
      </View>

      {/* Car Animation */}
      <View style={styles.road}>
        <View style={styles.roadLine} />
        {renderCar()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
  },
  header: {
    backgroundColor: '#FF6D00',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFA040',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#FF6D00',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#FF6D00',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    marginTop: 20,
  },
  detailItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFCC80',
  },
  detailLabel: {
    fontSize: 14,
    color: '#BF360C',
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 16,
    color: '#E65100',
    marginTop: 5,
  },
  road: {
    // position: 'absolute',
    marginTop: 100,
    width: '100%',
    height: 30,
    backgroundColor: '#424242',
  },
  roadLine: {
    position: 'absolute',
    top: 14,
    width: '100%',
    height: 2,
    backgroundColor: 'white',
  },
  carContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
  },
  carBody: {
    width: 80,
    height: 20,
    backgroundColor: '#D84315',
    borderRadius: 5,
  },
  carTop: {
    position: 'absolute',
    top: -15,
    left: 10,
    width: 60,
    height: 15,
    backgroundColor: '#BF360C',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  wheel1: {
    position: 'absolute',
    top: 15,
    left: 10,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#212121',
    borderWidth: 2,
    borderColor: '#616161',
  },
  wheel2: {
    position: 'absolute',
    top: 15,
    left: 55,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#212121',
    borderWidth: 2,
    borderColor: '#616161',
  },
});

export default ProfilePage;
