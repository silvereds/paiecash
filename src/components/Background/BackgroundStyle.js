import {Dimensions, StyleSheet} from 'react-native'
import {theme} from "../../core/theme";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    container: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        width: '100%',
        minHeight: Dimensions.get("window").height,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});