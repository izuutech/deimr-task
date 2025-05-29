import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
    paddingTop: 20,
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
  icon: {
    marginRight: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#ABABAB80',
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#333',
  },
});

export default styles;
