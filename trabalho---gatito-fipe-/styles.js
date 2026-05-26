import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  sav: {
    flex: 1,
    borderWidth: 8,
    borderColor: '#1a237e',
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#e8eaf6',
    padding: 12,
    paddingBottom: 32,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 6,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a237e',
    marginBottom: 16,
  },

  btnConsultar: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    marginBottom: 8,
  },

  btnValor: {
    backgroundColor: '#283593',
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 4,
  },

  loading: {
    marginTop: 12,
  },

  card: {
    backgroundColor: '#c5cae9',
    padding: 10,
    margin: 2,
    marginTop: 10,
  },

  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 6,
  },

  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 4,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#1a237e',
  },

  itemTexto: {
    fontSize: 14,
    color: '#1a237e',
  },

  cardSelecionado: {
    backgroundColor: '#1a237e',
    padding: 10,
    margin: 2,
    marginTop: 8,
  },

  labelSelecionado: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },

  cardResultado: {
    backgroundColor: '#c5cae9',
    padding: 14,
    margin: 2,
    marginTop: 12,
  },

  resultadoMarca: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 4,
  },

  resultadoAno: {
    fontSize: 13,
    color: '#3949ab',
    marginBottom: 8,
  },

  resultadoValor: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
  },

  erro: {
    color: '#c62828',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
  },

});