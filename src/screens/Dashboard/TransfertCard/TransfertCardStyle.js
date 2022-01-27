import {StyleSheet} from 'react-native';
import {theme} from "../../../core/theme";

const styles = StyleSheet.create({
  Maincontainer: {
      flex: 1,
      backgroundColor: '#fafafa',
      marginHorizontal: 20
  },
  headerTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.text
  },
  leftHeaderWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  backButton: {
      marginRight: 10,
  },
  profileDetailsSection: {
      paddingTop: 10,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      borderBottomStartRadius: 30,
      borderBottomEndRadius: 30,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 1,
  },
  profileInfoSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  profilePhoto: {
      height: 100,
      width: 100,
      borderRadius: 50,
  },
  statisticsContainer: {
      display: 'flex',
      alignItems: 'center',
  },
  statisticsText: {
      color: theme.colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
  },
  statisticsTitle: {
      fontSize: 18,
      color: theme.colors.disabled,
  },
  profileCenterSection: {
      display: 'flex',
      alignItems: 'center',
  },
  nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
  designationText: {
      fontSize: 12,
      color: theme.colors.disabled,
      marginBottom: 10,
  },
  editProfileWrapper: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 25,
      borderRadius: 5,
      paddingVertical: 10,
  },
  editProfileText: {
      color: '#fff',
  },
  exploreSection: {
      paddingHorizontal: 16,
      paddingTop: 5,
  },
  exploreHeader: {
      fontWeight: 'bold',
      color: theme.colors.disabled,
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
  },
  exploreContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },
  singleExplore: {
      height: 80,
      width: '30%',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 1,
      backgroundColor: '#fff',
      margin: 1,
      marginBottom: 10,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
  },
  exploreText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: theme.colors.primary,
  },


  buttonContainer : {
    marginHorizontal: 20,
    marginVertical: 10
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    borderColor: theme.colors.textLight,
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  rounderIco: {
    backgroundColor: theme.colors.primary,
    height: 40,
    width: 40,
    marginStart: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatingDeleteButton: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    right: 10,
    end: 10
  },
  textLabel: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 3,
    marginTop: 20
  },
  submitButton: {
      backgroundColor: theme.colors.primary
  },




  VerticalBar: {
    width : 3,
    height: '100%',
    marginRight: 10,
  },
  container2: {
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 0,
    paddingStart: 0,
    marginTop: 20,
    height: 70,
    width: 150,
    marginEnd: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
},




  container: {
      backgroundColor: '#fff',
      padding: 10,
      marginTop: 20,
      width: '100%',
      height: 70,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 1,
      margin: 1,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  taskProgressIndicator: {marginRight: 10},
  taskMiddleColumn: {width: '50%', marginRight: 'auto'},
  taskTitle: {
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 3,
  },
  taskDesc: {
      color: theme.colors.disabled,
      marginBottom: 3,
  },
  taskProgressBar: {borderRadius: 7, height: 6},
  teamWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      marginRight: 10,
  },
  memberPhoto: {
      height: 40,
      width: 40,
      borderRadius: 50,
      marginLeft: -10,
  },
});

export default styles;