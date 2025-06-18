import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F4EC',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3C2415',
    },
    text: {
        fontSize: 18,
        color: '#3C2415',
        marginBottom: 10,
    },

    curve: {
        fontSize: 12,
        color: '#a7a7a7',
        marginTop: 25,
    },

    loginButton: {
        backgroundColor: '#D2691E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },

      navItem: {
        padding: 10,

      },
      navText: {
        color: '#000000',
        fontSize: 16,
      },

      navItem: {
        alignItems: 'center',
      },
      navText: {
        color: '#000000',
        fontSize: 14,
        marginTop: 5,
      },

      
    });
    
export default styles;