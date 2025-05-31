import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  promoBanner: {
    paddingHorizontal: 25,
    paddingVertical: 26,
    borderRadius: 8,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
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
    fontSize: 12,
    color: '#ffffff80',
    marginTop: 4,
  },
  image: {
    position: 'absolute',
    right: -10,
    top: -60,
    width: 120,
    height: 120,
  },
});

export default styles;
