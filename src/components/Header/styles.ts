import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
  },
  userbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagebox: {
    width: '10%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
