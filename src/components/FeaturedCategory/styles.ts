import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 25,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: '#F7770F',
    fontWeight: '600',
    fontSize: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#F7770F1A',
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  featuredCategoriesContainer: {
    marginBottom: 24,
  },
  featuredCategoryCard: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagebox: {
    width: '20%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.2,
    borderColor: '#EEEEEE80',
  },

  image: {
    width: '60%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  detailsbox: {
    width: '70%',
  },
  featuredCategoryName: {
    fontSize: 16,
    fontWeight: '600',
  },
  featuredCategoryTag: {
    fontSize: 10,
    color: '#F7770F',
    marginTop: 10,
    fontWeight: '300',
    alignSelf: 'flex-start',
    backgroundColor: '#F7770F1A',
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  featuredCategoryProducts: {
    fontSize: 10,
    color: '#111111',
    fontWeight: '300',
  },
});

export default styles;
