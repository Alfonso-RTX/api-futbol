import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const categories = [
  { title: '⚽ PARTIDOS EN VIVO', image: require('../assets/live-matches.png') },
  { title: '📅 PRÓXIMOS PARTIDOS', image: require('../assets/upcoming-matches.jpeg') },
  { title: '🏆 RESULTADOS', image: require('../assets/results.jpg') },
  { title: '📰 NOTICIAS', image: require('../assets/news.png') },
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECFF',
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#2C3E50',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3498DB',
    padding: 12,
    borderRadius: 15,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    marginVertical: 12,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3498DB',
    padding: 12,
    borderRadius: 15,
    marginTop: 15,
  },
  footerItem: {
    fontSize: 26,
    color: 'white',
  },
});
