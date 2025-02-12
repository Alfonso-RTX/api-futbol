// components/MatchInfo.js - Componente de Información de Partidos
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, FlatList } from 'react-native';
import * as Notifications from 'expo-notifications';

// Configuración de API
const API_URL = 'https://api.football-data.org/v2/matches';
const API_KEY = 'TU_API_KEY_AQUI';

export const MatchInfo = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
    scheduleNotifications();
  }, []);

  // Función para obtener partidos
  const fetchMatches = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: { 'X-Auth-Token': API_KEY }
      });
      const data = await response.json();
      setMatches(data.matches);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  // Función para programar notificaciones
  const scheduleNotifications = async () => {
    matches.forEach(async (match) => {
      const matchDate = new Date(match.utcDate);
      const now = new Date();
      const timeDiff = matchDate - now;

      if (timeDiff > 0) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: '¡Partido próximo!',
            body: `El partido ${match.homeTeam.name} vs ${match.awayTeam.name} comienza pronto.`,
          },
          trigger: { seconds: timeDiff / 1000 },
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidos de Fútbol</Text>
      <FlatList 
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.matchContainer}>
            <Text style={styles.matchText}>{item.homeTeam.name} vs {item.awayTeam.name}</Text>
            <Text style={styles.matchText}>Fecha: {new Date(item.utcDate).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
};



// Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  matchContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  matchText: {
    fontSize: 18,
    textAlign: 'center',
  }
});
