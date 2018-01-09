import { StyleSheet } from 'react-native';
import { Colors } from '@theme/';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  messageCard: {
    marginRight: 20,
    borderRadius: 20,
    borderColor: '#80deea',
    borderWidth: 1,
    backgroundColor: '#80deea',
  },
  messageBackground: {
    borderRadius: 20,
    minHeight: 10,
    borderColor: '#80deea',
    borderWidth: 1,
    marginRight: 50,
    marginLeft: 10,
    marginBottom: 25,
    backgroundColor: '#80deea',
  },
  button: {
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    maxWidth: 150,
    backgroundColor: '#80deea',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 40,
  },
  center: {
    marginLeft: 50,
    marginRight: 50,
    borderColor: Colors.lightBlue,
    borderBottomColor: Colors.lightBlue,
  },
  buttonSet: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 50,
    bottom: 20,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    borderColor: Colors.lightBlue,
    borderBottomColor: Colors.lightBlue,
  }
});
