import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

export default function Tabs() {
  const [active, setActive] = useState('Favorite');
  const data = ['Favorite', 'Food', 'Electronics', 'Gadgets', 'Games'];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.tabbox,
              active === item
                ? {
                    backgroundColor: '#214CCE',
                    borderWidth: 0,
                    borderColor: undefined,
                  }
                : {
                    backgroundColor: '#fff',
                    borderWidth: 0.5,
                    borderColor: '#EEEEEE',
                  },
            ]}
            onPress={() => setActive(item)}>
            <Text
              style={[
                styles.tabtext,
                active === item
                  ? {
                      color: '#FFFFFF',
                    }
                  : {
                      color: '#999999',
                      borderColor: '#EEEEEE',
                    },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
