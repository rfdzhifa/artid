import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { Cover, BackButton } from '../../assets';
import styles from './DetailArticle.styles';
import { Gap } from '../../components';

const DetailArticle = ({ route, navigation }) => {
    // Extract the item data from the route params
    const { item } = route.params;

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
            <Image source={Cover} style={styles.cover} />
            <TouchableOpacity onPress={handleBackPress}>
                <Image source={BackButton} style={styles.backButton} />
            </TouchableOpacity>
            <Gap height={300} />
            <View style={styles.rectangle}>
                <Text style={styles.title}>{item.title}</Text>
                <Gap height={10} />
                <Text style={styles.date}>9 Desember 2022</Text>
                <Gap height={20} />
                <Text style={styles.content}>{item.content}</Text>
                <Gap height={30} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DetailArticle;