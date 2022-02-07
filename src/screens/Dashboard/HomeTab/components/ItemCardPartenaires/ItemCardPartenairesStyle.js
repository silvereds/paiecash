import {StyleSheet} from "react-native";
import {theme} from "../../../../../core/theme";

export default styles = StyleSheet.create({
    codePromo : {
        color: theme.colors.primary,
        fontWeight: 'bold',
        marginTop: 5
    },
    textDisabled : {
        color: theme.colors.disabled
    },
    imageBox: {
        flex: 1,
        width: '40%'
    },
    textBox : {
        flex: 2, 
        width: '40%', 
        marginLeft: 40
    },
    title: {
        color: theme.colors.text,
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5
    },
    image: {
        height: 100,
        width: 100
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        flexDirection: 'row'
    }
})