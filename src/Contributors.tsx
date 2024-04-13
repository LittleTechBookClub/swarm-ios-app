import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const Contributors = () => {

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
            style={styles.scrollView}>
            <Text>Melisa Im</Text>
            <Text>Linden Chiu</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff'
    },
});


export default Contributors;