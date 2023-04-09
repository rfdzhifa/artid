import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    cover: {
        width: '100%',
        height: 300,
        position: 'absolute',

    },
    backButton: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 30,
        top: 60,
    },
    rectangle: {
        marginTop: -25,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FCFCFC',
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        color: '#4B4B4B'
    },
    date: {
        fontSize: 14,
        color: '#B6B6B6'
    },
    content: {
        fontSize: 16,
        color: '#4B4B4B',
        textAlign: 'justify',
        elevation: 10, // Add elevation for shadow effect
    },
    buttonContainer: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#223B67',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        bottom: 0,
        alignSelf: 'center',
        marginVertical: 30,
        shadowColor: '#B6B6B6',
        elevation: 3,
        shadowOpacity: 0.5,
        shadowColor: '#'
    },
    buttonTitle: {
        color: '#223B67',
        fontWeight: 600,
        fontSize: 16
    }
});

export default styles;