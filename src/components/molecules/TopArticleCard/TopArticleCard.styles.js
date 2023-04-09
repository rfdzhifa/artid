import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    cover: {
        width: 350,
        height: 350,
        borderRadius: 15,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangle: {
        marginTop: -60,
        justifyContent: 'space-around',
        width: 280,
        height: 120,
        borderRadius: 13,
        shadowRadius: 40,
        shadowOpacity: 1,
        elevation: 18,
        shadowColor: '#B6B6B6',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontWeight: 600,
        fontSize: 14,
        color: '#4B4B4B'
    },
    date: {
        fontSize: 12,
        color: '#B6B6B6',
    },
    content: {
        fontSize: 12,
        color: '#4B4B4B'
    }
});

export default styles;