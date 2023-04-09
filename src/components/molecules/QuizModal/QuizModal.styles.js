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
    }

})

export default styles;