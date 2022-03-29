import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.production.min';

const Quiz = ({navigation}) => {
    const[questions, setQuestions] = useState();
    const[ques, setQues] = useState(0);
    const getQuiz=async()=>{
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
    };
    useEffect(()=>{
        getQuiz
    },[])
    return (
        <View style={styles.container}>
            {questions && (
            <View style={styles.parent}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Q. Imagine this is a question</Text>
                </View>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.options}>Option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.options}>Option 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.options}>Option 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.options}>Option 4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )} 
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    questionContainer: {
        marginVertical: 16,
    },
    optionsContainer: {
        marginVertical: 16,
        flex: 1,
    },
    bottomButtons: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection:'row',
    },button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28,
    },
    options: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
    
})