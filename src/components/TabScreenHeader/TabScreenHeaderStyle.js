import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    headerRightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        marginRight: 15,
        height: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuOptionText: {
        fontSize: 16,
        paddingLeft: 7,
        paddingVertical: 3,
    },
    searchInputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 170,
        paddingHorizontal: 7,
        height: 35,
    },
    searchInputField: {
        fontSize: 15,
        height: 40,

    },
});