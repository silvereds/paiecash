import {StyleSheet} from "react-native";
import { COLORS } from "../../../../../../constants";
import {theme} from "../../../../../../core/theme";

export default styles = StyleSheet.create({
    codePromo : {
        color: COLORS.lightGray2,
        fontWeight: 'bold',
        marginTop: 5
    },
    textDisabled : {
        color: COLORS.lightGray1
    },
    imageBox: {
        flex: 1,
        //width: '40%'
    },
    textBox : {
        flex: 2, 
        // width: '40%', 
        marginLeft: 40
    },
    title: {
        color: theme.colors.textWhite,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    image: {
        height: 20,
        width: 50
    },
    container: {
        // display: 'flex',
        // justifyContent: 'space-between',
        width: '95%',
        // flexDirection: 'row',
        
        padding: 10,
        marginBottom: 10,
        backgroundColor: COLORS.primary2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    }
})