import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  BetaIcon,
  CaretRightIcon,
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
      badge: <NewIcon />,
    },
    {
      icon: <RepairIcon />,
      title: 'Smart Repair',
      description: 'Easy fixes',
      badge: <BetaIcon />,
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
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
        data={quickItems}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.quickAccessCard}>
            <View style={styles.accessTop}>
              <View style={styles.iconSection}>
                <View style={styles.iconbox}>{item.icon}</View>
              </View>
              <View style={styles.detailsbox}>
                <Text style={styles.quickAccessTitle}>{item.title}</Text>
                <Text style={styles.quickAccessText}>{item.description}</Text>
              </View>
            </View>
            <View style={styles.badgeRow}>
              <View>{item.badge}</View>
              <CaretRightIcon />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.quickAccessContainer}
      />
    </View>
  );
}
