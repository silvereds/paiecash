import {Dimensions, StyleSheet} from 'react-native';
import {theme} from "../../../core/theme";

const heightScreen =  Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 40,
    },
    bodyContent: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        justifyItems: 'center',
        minHeight: Dimensions.get("window").height
    },
    largeText: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 32,
        marginBottom: 10,
    },
    smallText: {
        fontSize: 14,
        color: theme.colors.text,
        fontWeight: '500',
        marginBottom: 40,
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: heightScreen/10,
    },
    textInput: {fontSize: 17, flex: 1, color: '#000', height: heightScreen/10},
    savePwdRow: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    savePwdText: {color: theme.colors.surface, fontWeight: 'bold'},
    loginBtnWrapper: {
        backgroundColor: theme.colors.primary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 7,
        marginBottom: 15,
    },
    loginBtnText: {fontWeight: 'bold', fontSize: 16, color: '#fff'},
    signUpBtnWrapper: {
        borderColor: theme.colors.primary,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 7,
    },
    signUpBtnText: {fontWeight: 'bold', fontSize: 16, color: '#000000aa'},
});

export default styles;