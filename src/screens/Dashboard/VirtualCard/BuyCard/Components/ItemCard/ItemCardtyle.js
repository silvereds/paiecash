import {StyleSheet} from "react-native";
import {theme} from "../../../../../../core/theme";

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
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    }
})