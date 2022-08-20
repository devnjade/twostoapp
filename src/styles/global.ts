import { Platform, StatusBar, StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 32,
  },
  scrollView: {
    flex: 1,
  },
});
