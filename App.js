import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    var sDate = "1-Jan-02";
    var dateArray = sDate.split('-');
    var dateDict = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12,
    }
    var data = new Date(
        "20" + dateArray[2],
        dateDict[dateArray[1]],
        dateArray[0]
    )

    return (
        <View style={styles.container}>
        <Text> { data.toString() } Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
