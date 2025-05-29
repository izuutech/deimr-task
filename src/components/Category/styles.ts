import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#ffb322',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ABABAB33',
    marginBottom: 12,
  },
  categoryItems: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFA000',
    backgroundColor: '#FFA0001F',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  categoryDescription: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
});

export default styles;
