import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { Cover, BackButton } from '../../assets';
import styles from './DetailArticle.styles';
import { Gap } from '../../components';
import WebView from 'react-native-webview';
import RenderHTML from 'react-native-render-html';
import QuizModal from '../../components/molecules/QuizModal';

const DetailArticle = ({ route, navigation }) => {
    // Extract the item data from the route params
    const { article, levelId } = route.params;
    const [quizVisible, setQuizVisible] = useState(false);

    const openQuiz = () => {
        setQuizVisible(true);
    }
    const closeQuiz = () => {
        setQuizVisible(False);
    }

    const handleBackPress = () => {
        navigation.goBack(); // Call the navigation.goBack() method to navigate back
        return true; // Return true to indicate that the event has been handled
    };

    // Add back button event listener when component mounts
    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        // Clean up back button event listener when component unmounts
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, []);

    return (
        <ScrollView style={styles.page}>
            <Image source={{ uri: article.cover }} style={styles.cover} />
            <TouchableOpacity onPress={handleBackPress}>
                <Image source={BackButton} style={styles.backButton} />
            </TouchableOpacity>
            <Gap height={300} />
            <View style={styles.rectangle}>
                <Text style={styles.title}>{article.title}</Text>
                <Gap height={10} />
                <Text style={styles.date}>{article.createdAt}</Text>
                <Gap height={20} />
                <Text style={styles.content}>{article.content}</Text>
                <Gap height={60} />
                {/* <TouchableOpacity onPress={openQuiz} style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Start Quiz</Text>
                </TouchableOpacity> */}
                {/* <QuizModal
                    isVisible={quizVisible}
                    onClose={closeQuiz}
                    levelId={levelId}
                /> */}
            </View>
        </ScrollView>
    );
};

export default DetailArticle;