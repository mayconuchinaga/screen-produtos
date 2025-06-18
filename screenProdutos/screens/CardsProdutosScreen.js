import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const produtos = [
    { id: '1', nome: 'Jaqueta com franjas', imagem: 'https://cdn-images.farfetch-contents.com/28/30/34/28/28303428_57779911_2048.jpg', preco: 'R$ 30.128,00' },
    { id: '2', nome: 'Mochila Bracelet', imagem: 'https://cdn-images.farfetch-contents.com/27/71/74/99/27717499_58682026_2048.jpg', preco: 'R$ 14.996,00' },
    { id: '3', nome: 'Bota Eve com salto 85mm', imagem: 'https://cdn-images.farfetch-contents.com/25/26/94/27/25269427_55502327_2048.jpg', preco: 'R$ 22.457,00' },  
];

const CardsProdutoScreen = ({ navigation }) => {
    const renderProduto = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
        </TouchableOpacity>
    );

return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Produtos</Text>
        <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    lista: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 14,
        color: '#888',
    },
});

export default CardsProdutoScreen;