import React, { useState, useEffect } from "react";
import { Image, View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from "./QuizModal.styles";
import { Gap } from "../../atoms";
import axios from "axios";

const QuizModal = ({ isVisible, closeQuiz, contentId }) => {

    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Fetch data from API based on levelId
        axios.get(`http://192.168.67.104:5000/api/quizzes/content/${contentId}`)
            .then((res) => {
                const filteredQuiz = res.data.data.filter(
                    (article) => article.id === contentId
                );
                setQuiz(filteredQuiz);
                console.log(quiz);
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
                    <Text style={styles.quiz}>Siapakah aku?</Text>
                    <Gap height={20} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Jipa</Text>
                    </TouchableOpacity>
                    <Gap height={10} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Kambing</Text>
                    </TouchableOpacity>
                    <Gap height={10} />
                    <TouchableOpacity onPress={closeQuiz}>
                        <Text>TUTUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default QuizModal;