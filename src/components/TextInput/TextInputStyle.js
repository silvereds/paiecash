import {StyleSheet} from 'react-native'
import {theme} from '../../core/theme'


export default styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      backgroundColor: theme.colors.surface,
      borderRadius: 10
    },
    description: {
      fontSize: 13,
      color: theme.colors.secondary,
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: theme.colors.error,
      paddingTop: 8,
    },
  })
  