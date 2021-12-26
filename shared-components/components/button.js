import {View, Button, Text, StyleSheet, Alert} from 'react-native'

const GKKButton = () => {
    return(
        <>
            <Text style={styles.text}>
                Press this button for Hi : 
            </Text>
            <View style={styles.container}>
                <Button
                    title='GKK-Button'
                    onPress={() => Alert.alert("Hello")}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        color: 'white'
    },
    text: {
        color: 'black',
        fontSize: 20
    }
})

// exporting as dafault item
export default GKKButton