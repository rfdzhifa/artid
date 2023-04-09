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
        paddingTop: 30
    },
    textDivider: {
        fontSize: 16,
        fontWeight: 600,
        color: '#4B4B4B'
    }
});

export default styles;