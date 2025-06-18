// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text style={styles.header}>Notícias das Subs</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Últimas Notícias sobre o FlopTok', description: 'Aghata Nunes manda "shade" para ygona -já morta- no TikTok: "Fios, oque essa ygona ta falando de mim no terceiro ciclo do inferno? Bixas se eu descer!"' },
  { id: '2', title: 'Mercado Financeiro de São Paulo em Alta', description: 'Fernanda Coxta abre sua septagésima loja na 25 de março, se torna a maior vendedora de São Paulo e move a economia em mais de R$50.000.000.000 bilhões de reais.' },
  { id: '3', title: 'Dicas de Viagem', description: 'Com a nossa agente de viagem Tokinho você tem a chance de conhecer os melhores destinos do Brasil. Contrate-a já!' },
  { id: '4', title: 'Mundo da Fofoca', description: 'Ygona Moura faz pacto com Belzebuth e consegue passagem de ida e volta para o mundo dos vivos e rebate shade de Aghata Nunes: "Eu voltei amores, e se eu achar essa maricona ela vem comigo trabalhar para as moscas."' },
  { id: '5', title: 'Receitas Deliciosas com nossa Chef Saori Kido', description: 'Aprenda o prato Francês Creme de La Scat com nossa renomada chef Saori Kido, hoje no programa NewMFX receitas.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

