import React, { useState, useEffect } from "react";
import { Image, View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from "./QuizModal.styles";
import { useNavigation } from '@react-navigation/native';
import { Gap } from "../../atoms";
import { WrongAnswer, CorrectAnswer } from "../../../assets";
import axios from "axios";

const QuizModal = ({ isVisible, closeQuiz, contentId, article }) => {
    const navigation = useNavigation();

    const [quiz, setQuiz] = useState(null);
    const [responseVisible, setResponseVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            // Fetch data from API based on contentId
            axios
                .get(`http://192.168.228.70:5000/api/quizzes/content/${contentId}`)
                .then((res) => {
                    const filterQuiz = res.data.data.filter(
                        (quiz) => contentId === quiz.contentId
                    );
                    setQuiz(filterQuiz);
                    console.log(quiz); // This may not show the updated quiz state
                })
                .catch((error) => console.log(error));
        };

        fetchData(); // Call the fetchData function when component mounts or when contentId changes
    }, [contentId]);

    const handleAnswer = (answer) => {
        const isCorrectAnswer = answer === quiz[0].key;
        setIsCorrect(isCorrectAnswer);
        setResponseVisible(true);
    }

    const closeAllModals = () => {
        closeQuiz()
        setResponseVisible(false)
    }


    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="fade"
            onRequestClose={closeQuiz}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.quiz}>{quiz && quiz[0].quiz}</Text>
                    <Gap height={20} />
                    <TouchableOpacity
                        onPress={() => handleAnswer("a")}
                        style={styles.button}>
                        <Text style={styles.textButton}>{quiz && quiz[0].a}</Text>
                    </TouchableOpacity>
                    <Gap height={10} />
                    <TouchableOpacity
                        onPress={() => handleAnswer("b")}
                        style={styles.button}>
                        <Text style={styles.textButton}>{quiz && quiz[0].b}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={responseVisible}
                animationType="fade"
                onRequestClose={() => setResponseVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.textResponse}>
                            {isCorrect ? "Jawabanmu Benar!" : "Jawabanmu Salah:("}
                        </Text>
                        <Gap height={10} />
                        <Image
                            source={
                                isCorrect
                                    ? require("../../../assets/illustrations/correctAnswer.png")
                                    : require("../../../assets/illustrations/wrongAnswer.png")
                            }
                            style={styles.imageResponse} />
                        <Gap height={10} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => closeAllModals()}>
                            <Text style={styles.textButton}>
                                {isCorrect ? "Sounds Good" : "Try Again"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Modal>
    );
}

export default QuizModal;