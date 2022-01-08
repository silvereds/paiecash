import React, {StyleSheet} from 'react-native';
import {theme} from "../../../core/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectDetailsSection: {
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
        marginBottom: 15,
    },
    projectTitleWrapper: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectTitle: {
        fontWeight: 'bold',
        color: theme.colors.text,
        fontSize: 18,
        marginRight: 10,
    },
    projectTeamAndProgress: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    projectTeamTitle: {fontWeight: 'bold', marginBottom: 5, color: theme.colors.disabled},
    projectDescription: {
        color: theme.colors.disabled,
        width: '100%',
        marginBottom: 5,
    },
    projectProgressWrapper: {marginRight: 30},
    projectProgress: {
        fontWeight: 'bold',
        color: theme.colors.text,
        fontSize: 18,
    },
    projectTeamWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    projectMemberPhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginLeft: -10,
    },
    plusBtnContainer: {
        backgroundColor: theme.colors.primary,
        height: 40,
        width: 40,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectStatus: {
        marginLeft: 'auto',
        borderRadius: 20,
        textAlign: 'center',
        borderColor: theme.colors.disabled,
        borderWidth: 1,
        textTransform: 'capitalize',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.disabled,
    },
    projectBody: {
        paddingTop: 10,
        paddingHorizontal: 16,
    },
    projectTabs: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 7,
        marginBottom: 5,
    },
    projectTab: {
        width: '30%',
        borderRadius: 7,
    },
    activeProjectTab: {
        backgroundColor: theme.colors.primary,
    },
    projectTabText: {fontSize: 16, paddingVertical: 7, textAlign: 'center'},
    activeProjectTabText: {
        color: '#fff',
    },
    inActiveProjectTabText: {
        color: theme.colors.primary
    },
    bottomContainer: {
        height: '65%',
    },
    bottomContent: {
        paddingBottom: 200,
    },
    tasksHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
    },
    tasksRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tasksLeftText: {
        marginRight: 7,
        fontWeight: 'bold',
        fontSize: 15,
    },
    plusBtnContainer2: {
        backgroundColor: theme.colors.primary,
        height: 30,
        width: 30,
        borderRadius: 50,
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;