import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const Contributors = () => {
  const contributorsList = ['Melisa Im', 'Monica Lam', 'Linden Chiu', 'Shilpa Sivarajan', 'Derik Vo'];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
      style={styles.scrollView}
    >
      {contributorsList.map((contributor, index) => (
        <Text key={index} accessibilityLabel="Contributor">
          {contributor}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Contributors;
