import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 10,
  },
  quickAccessContainer: {
    paddingVertical: 12,
    width: '100%',
  },

  quickAccessCard: {
    width: 250,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F1F1',
    marginBottom: 12,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSection: {
    width: '20%',
  },
  iconbox: {
    width: '20%',
    marginBottom: 10,
  },
  detailsbox: {
    width: '75%',
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  quickAccessText: {
    fontSize: 12,
    color: '#979797',
    marginTop: 4,
  },
  newBadge: {
    fontSize: 10,
    color: '#6200ee',
    marginTop: 4,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});

export default styles;
