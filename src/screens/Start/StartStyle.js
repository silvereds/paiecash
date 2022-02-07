import {Dimensions, StyleSheet} from "react-native";

import {theme} from "../../core/theme";

export default styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        minHeight: Dimensions.get("window").height,
        backgroundColor: theme.colors.surface,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})