import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalContent: {
        width: '75%',
        height: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 30,
        backgroundColor: '#FFFFFF'
    },
    quiz: {
        fontSize: 16,
        color: '#223B67',
        fontWeight: 500,
        textAlign: 'center'
    },
    button: {
        borderRadius: 7,
        padding: 13,
        backgroundColor: '#223B67',
        width: '100%',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    textResponse: {
        fontSize: 20,
        color: '#223B67',
        fontWeight: 600
    },
    imageResponse: {
        width: 200,
        height: 200
    }
})

export default styles;