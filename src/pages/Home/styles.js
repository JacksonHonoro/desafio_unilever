import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  form: {
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },

  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFF',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#499ad1',
    borderRadius: 4,
    marginLeft: 10,
  },

  List: {
    marginTop: 20,
  },

  cardRepo: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginBottom: 15,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  details: {
    marginLeft: 10,
  },

  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  info: {
    flexDirection: 'row',
    marginTop: 15,
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 10,
  },

  iconText: {
    marginLeft: 6,
  },
});

export default styles;
