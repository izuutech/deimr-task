import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0B0F',
    borderRadius: 10,
    paddingLeft: '5%',
  },
  header: {
    marginTop: 20,
    marginBottom: 16,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ffffff80',
    marginTop: 4,
  },
  productsContainer: {
    paddingVertical: 12,
  },
  productCard: {
    width: 130,
    marginRight: 10,
    padding: 8,
    backgroundColor: '#ffffff20',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E3E0E033',
  },
  productImage: {
    width: 114,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    color: '#fff',
  },
  productPrice: {
    fontSize: 8,
    lineHeight: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
