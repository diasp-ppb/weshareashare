import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A63',
    paddingTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  button: {
    borderWidth: 0,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
      alignSelf: 'center'
  },
  company: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  profileInfo: {
    textAlign: 'left',
  },
  lastInMenu: {
    paddingBottom: 40,
  },
  headerIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#596a72',
    paddingLeft: 5,
  },
    bar:{
     height: 3,
        backgroundColor: '#596a71'
    }
});
