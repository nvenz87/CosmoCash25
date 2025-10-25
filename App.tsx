import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Minimal TypeScript Expo entry.
 * Replace with your app navigator/screens as we port UI over.
 */

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>CosmoCash25 (Expo, TypeScript)</Text>
        <Text style={styles.subtitle}>
          This scaffold lives on branch "expoize". Replace this component with your app's root navigator.
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: '700' },
  subtitle: { marginTop: 8, fontSize: 14, color: '#666', textAlign: 'center' },
});