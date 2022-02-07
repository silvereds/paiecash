import {StyleSheet} from "react-native";
import {theme} from "../../../core/theme";

const styles = StyleSheet.create({
    profileDetailsSection: {
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    },
    profileInfoSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    profilePhoto: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    statisticsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    statisticsText: {
        color: theme.colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    statisticsTitle: {
        fontSize: 15,
        color: theme.colors.text,
    },
    profileCenterSection: {
        display: 'flex',
        alignItems: 'center',
    },
    nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
    designationText: {
        fontSize: 12,
        color: theme.colors.text,
        marginBottom: 20,
    },
    editProfileWrapper: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 25,
        borderRadius: 5,
        paddingVertical: 10,
    },
    editProfileText: {
        color: '#fff',
    },
    exploreSection: {
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    exploreHeader: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 14,
    },
    exploreContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    singleExplore: {
        height: 80,
        width: '28%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: '#fff',
        margin: 1,
        marginBottom: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    exploreText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: theme.colors.primary,
    },
    fullWidth: {width: '100%'},
});

export default styles