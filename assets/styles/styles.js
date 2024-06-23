import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    inputGroup: {
        width: '100%', // Full width
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    inputLabel: {
        fontSize: 16,
        color: '#555', // Dark gray for text
        marginBottom: 5,
    },
    input: {
        width: '100%', // Full width
        height: 40,
        borderColor: '#ccc',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4, // Rounded corners for inputs
        fontSize: 16, // Slightly larger font size
        color: '#333', // Dark text for better readability
    },
});

export default styles
