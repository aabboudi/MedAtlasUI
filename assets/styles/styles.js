import { StyleSheet, Dimensions } from 'react-native';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

// Define styles as a function that takes Colors and colorScheme as parameters
const styles = (Colors, colorScheme) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // padding: 8,
        // paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors[colorScheme ?? 'light'].text,
    },
    pageHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: Colors[colorScheme ?? 'light'].text,
    },
    text: {
        color: Colors[colorScheme ?? 'light'].text,
    },
    textMuted: {
        color: Colors[colorScheme ?? 'light'].textMuted,
    },
    separator: {
        marginVertical: 15,
        height: 1,
        width: '80%',
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2 * vh,
    },
    rowTitle: {
        fontSize: 2 * vh,
        fontWeight: 'bold',
        marginBottom: 1 * vh,
        margin: 1 * vh,
    },
    item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
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
        color: '#555',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        backgroundColor: Colors[colorScheme ?? 'light'].backgroundColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        color: Colors[colorScheme ?? 'light'].text,
    },
    loader: {
        marginTop: 20,
    },
        errorText: {
        color: Colors[colorScheme ?? 'light'].textError,
        marginTop: 10,
    },
});

// Export a function call that passes Colors and colorScheme to styles
export default () => {
    const colorScheme = useColorScheme(); // Ensure useColorScheme is called here
    return styles(Colors, colorScheme);
};
