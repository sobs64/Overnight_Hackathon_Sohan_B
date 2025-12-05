import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

// Load from deployed Vercel URL
const APP_URL = 'https://trustwise-ai.vercel.app';

export default function App() {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: APP_URL }}
                originWhitelist={['*']}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                renderLoading={() => (
                    <ActivityIndicator
                        color="#2563eb"
                        size="large"
                        style={styles.loader}
                    />
                )}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    webview: {
        flex: 1,
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -20,
        marginLeft: -20,
    },
});
