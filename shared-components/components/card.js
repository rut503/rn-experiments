import {View, Text, StyleSheet } from 'react-native'

const GKKCard = ({ content }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 50,
        shadowOpacity: 1,
        height: 100,
        width: 100,
        margin: 50
    },
    text: {
        color: 'red',
        fontSize: 20
    }
})

// exporting as named item
export { GKKCard }