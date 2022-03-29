import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Result = ({navigation}) => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:"https://image.shutterstock.com/image-vector/quiz-comic-pop-art-style-260nw-1506580442.jpg"}}
                resizeMode="contain"/>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text>HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
})