import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionbox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconbox: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC33',
    marginBottom: 10,
  },
  text: {
    color: '#42474F',
  },
});

export default styles;
