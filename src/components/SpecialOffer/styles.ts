import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  promoBanner: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specialbox: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F7770F',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginBottom: 10,
  },
  special: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  promoText: {
    fontSize: 14,
    color: '#ffffff80',
    marginTop: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default styles;
