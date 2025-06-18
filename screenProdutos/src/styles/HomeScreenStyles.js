import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#fffff',
      paddingTop: 40, // Espaço para o status bar
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    newsItem: {
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#800000',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      color: '#555',
    },
  });

export default styles;