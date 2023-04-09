import React, { useState, useEffect } from "react";
import { Image, View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from "./QuizModal.styles";
import axios from "axios";

const QuizModal = ({ isVisible, closeQuiz, levelId }) => {

    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Fetch data from API based on levelId
        axios.get(`http://192.168.67.104:5000/api/contents/${levelId}`)
            .then((res) => {
                setQuiz(res.data.data);
                console.log(quiz)
            })
            .catch((error) => console.log(error));
    }


    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="fade"
            onRequestClose={closeQuiz}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>{quiz?.quiz}</Text>
                    <Text>{quiz?.a}</Text>
                    <Text>{quiz?.b}</Text>
                    <TouchableOpacity onPress={closeQuiz}>
                        <Text>TUTUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default QuizModal;