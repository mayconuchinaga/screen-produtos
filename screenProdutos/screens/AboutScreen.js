import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importando a biblioteca de ícones
import styles from '../src/styles/AboutScreenStyles';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meu Aplicativo</Text>
      <Text style={styles.text}>Versão 1.0</Text>
      <Text style={styles.text}>Desenvolvedor: Maykinho Lindo</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Visite nosso site')}>
        <Text style={styles.loginButtonText}>Visite nosso site</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Entre em contato')}>
        <Text style={styles.loginButtonText}>Entre em contato por e-mail</Text>
      </TouchableOpacity>

      <Text style={styles.curve}>
        &copy; 2025 Maykinho Lindo. Todos os direitos reservados.
      </Text>

      {/* Navbar Inferior */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home clicado')}>
          <Icon name="home-outline" size={24} color="#D2691E" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Buscar clicado')}>
          <Icon name="settings-outline" size={24} color="#D2691E" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Perfil clicado')}>
          <Icon name="information-circle-outline" size={24} color="#D2691E" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
