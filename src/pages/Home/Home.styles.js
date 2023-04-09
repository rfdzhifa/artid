import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 30,
        backgroundColor: '#FCFCFC'
    },
    scrollPage: {
        flexDirection: 'column',
        paddingTop: 30,
        width: '100%'
    },
    container: {
        alignItems: 'center',
        width: '100%'
    },
    textDivider: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 600,
        color: '#4B4B4B',
        paddingLeft: 30,
    }
});

export default styles;