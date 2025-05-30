import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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
