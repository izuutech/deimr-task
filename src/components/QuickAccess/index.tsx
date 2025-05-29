import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  BetaIcon,
  NewIcon,
  RepairIcon,
  ShopIcon,
  SwapIcon,
} from '../../assets/svgs';

export default function QuickAccess() {
  const quickItems = [
    {
      icon: <SwapIcon />,
      title: 'Quick Swap',
      description: 'Instant exchanges',
      //   badge: 'New',
      badge: <NewIcon />,
    },
    {
      icon: <RepairIcon />,
      title: 'Smart Repair',
      description: 'Easy fixes',
      badge: <BetaIcon />,
      //   badge: 'Beta',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.sectionbox}>
        <ShopIcon />
        <Text style={styles.sectionTitle}>Quick Access</Text>
      </View>
      <FlatList
        horizontal
        keyExtractor={item => item.title}
        data={quickItems}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.quickAccessCard}>
            <View style={styles.iconSection}>
              <View style={styles.iconbox}>{item.icon}</View>
              {item.badge}
            </View>
            <View style={styles.detailsbox}>
              <Text style={styles.quickAccessTitle}>{item.title}</Text>
              <Text style={styles.quickAccessText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.quickAccessContainer}
      />
    </View>
  );
}
