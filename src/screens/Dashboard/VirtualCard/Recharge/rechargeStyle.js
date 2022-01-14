import {StyleSheet} from 'react-native';
import {theme} from '../../../../core/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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

  rechargeContent: {
    marginTop: 15,
    flex: 1,
  },

  buttonEnd: {
      position: 'absolute',
      bottom : 15,
      start: 15,
      end: 15,
  },

  rechargeBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
    flex: 1
  },
  rechargeTabs: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 7,
    marginBottom: 30,
  },

  amount : {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15
  },

  methodTab: {
    width: '30%',
    borderRadius: 7,
  },
  activeMethodTab: {
    backgroundColor: theme.colors.primary,
  },
  methodTabText: {
      fontSize: 16,
      paddingVertical: 7,
      textAlign: 'center'
  },
  activeMethodTabText: {
    color: '#fff',
  },
  inActiveMethodTabText: {
    color: theme.colors.primary,
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
