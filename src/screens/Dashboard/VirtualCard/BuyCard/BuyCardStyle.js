import {StyleSheet} from 'react-native';
import {theme} from "../../../../core/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  textTitle: {
    color: theme.colors.disabled,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default styles