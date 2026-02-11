import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import gameConfig from './game-config.json';

export default function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: gameConfig.gameUrl }}
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});