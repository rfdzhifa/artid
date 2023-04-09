import React, { useState, useEffect } from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./FlatList.styles";
import { dummyArticle } from "../../../assets";
import axios from 'axios';

const ListArticle = () => {
    const navigation = useNavigation();
    // const [contents, setData] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://192.168.67.104:5000/api/contents'); // replace with your API endpoint
    //         setData(response.data); // assuming the API response data is an array of content objects
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const renderItem = ({ item }) => {

        // const updatedItem = {
        //     cover: item?.cover || 'defaultCover', // Set default value for cover if missing
        //     title: item?.title || 'defaultTitle', // Set default value for title if missing
        //     meta: item?.meta || 'defaultMeta', // Set default value for meta if missing
        //     content: item?.content || 'defaultContent', // Set default value for content if missing
        //     createdAt: item?.createdAt || 'defaultCreatedAt', // Set default value for createdAt if missing
        // };
        // console.log(updatedItem)

        return (
            <TouchableOpacity onPress={() => navigation.navigate('DetailArticle', { item })}>
                <View style={styles.container}>
                    <Image source={{ uri: item.cover }} style={item.cover} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.createdAt}</Text>
                        <Text style={styles.content} numberOfLines={2}>{item.meta}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                data={dummyArticle}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                bounces={false}
            />
        </View>
    );
}

export default ListArticle;