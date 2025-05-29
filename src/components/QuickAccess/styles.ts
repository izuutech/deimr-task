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
  },
  accessTop: {
    borderColor: '#F3F1F1',
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
  badgeRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
