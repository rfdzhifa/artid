import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rowListContainer: {
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingBottom: 30,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 100,
        borderRadius: 10,
        shadowRadius: 40,
        shadowOpacity: 1,
        elevation: 18,
        shadowColor: '#B6B6B6',
        backgroundColor: '#FFFFFF'
    },
    textContainer: {
        height: 100,
        flex: 1,
        padding: 13,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cover: {
        height: 100,
        width: 100,
        borderRadius: 10
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