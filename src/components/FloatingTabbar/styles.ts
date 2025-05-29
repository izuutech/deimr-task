import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    elevation: 5,
  },
  mainTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#F7F6F6',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 10,
  },
  tabButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  centerTab: {
    zIndex: 1,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  expandedContent: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    alignItems: 'center',
  },
  optionCircle: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  optionText: {
    marginTop: 10,
    color: '#000',
  },
});

export default styles;
