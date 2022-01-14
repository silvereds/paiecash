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

  transferContent: {
    marginTop: 15,
    flex: 1,
  },

  fullWidth: {
    width: '100%',
  },

  buttonEnd: {
      position: 'absolute',
      bottom : 15,
      start: 15,
      end: 15,
  },

  transferBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
    flex: 1
  },

  amount : {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15
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
