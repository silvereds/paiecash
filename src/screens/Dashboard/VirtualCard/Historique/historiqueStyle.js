import {StyleSheet} from 'react-native';
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
  singleMemberPhoto: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  singleMemberInfo: {
    width: '65%',
    marginRight: 'auto',
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
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 10,
    marginBottom: 20
  } 
});

export default styles;