import {Dimensions, StyleSheet} from 'react-native';
import {theme} from "../../../../core/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  chatHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hearderContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginEnd: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.colors.text,
  },
  selectedMemberName: {
    fontWeight: '800',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  membersWrapper: {flex: 1, padding: 16},
  singleMember: {
    backgroundColor: '#fff',
    padding: 10,
    height: 70,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleMemberMore: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleMemberPhoto: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  singleMemberPhotoMore: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  singleMemberInfo: {
    width: '65%',
    marginRight: 'auto',
  },
  singleMemberInfoMore: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatWrapper: {
    flex: 1,
    position: 'relative',
  },
  rowGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  justifyEnd: {
    alignItems: 'flex-end'
  },
  creditAmount : {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginStart: 10,
  },
  
  debitAmount : {
    color: theme.colors.error,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginStart: 10,
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center'
  },
  fullWidthCenter: {
    width: '100%',
    alignItems: 'center'
  },
  amount: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 20,
    color: theme.colors.primary
  },
  spinnerTextStyle: {
    color: theme.colors.primary
  },
  selectedMemberLastSeen: {
    
  },
  marginVert15: {
    marginVertical : 15,
    backgroundColor: '#fff'
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  floatingLoader: {
    position: 'absolute',
    top:  0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default styles;