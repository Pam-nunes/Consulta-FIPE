import { Text, Image, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, Button } from 'react-native-paper';
import { useState } from 'react';
import { styles } from './styles';

const API_BASE = 'https://parallelum.com.br/fipe/api/v1';

export default function App() {

  const [iniciado, setIniciado] = useState(false);

  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);

  const [marca, setMarca] = useState(null);
  const [marcaNome, setMarcaNome] = useState(null);

  const [modelo, setModelo] = useState(null);
  const [modeloNome, setModeloNome] = useState(null);

  const [ano, setAno] = useState(null);
  const [anoNome, setAnoNome] = useState(null);

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  async function handleConsultar() {
    setIniciado(true);
    setErro(null);
    setLoading(true);
    setMarca(null); setMarcaNome(null);
    setModelo(null); setModeloNome(null);
    setAno(null); setAnoNome(null);
    setModelos([]); setAnos([]);
    setResultado(null);
    try {
      const req = await fetch(`${API_BASE}/carros/marcas`);
      const resp = await req.json();
      setMarcas(resp);
    } catch (err) {
      setErro('Erro ao buscar marcas.');
    } finally {
      setLoading(false);
    }
  }

  async function handleMarca(codigo, nome) {
    setMarca(codigo);
    setMarcaNome(nome);
    setModelo(null); setModeloNome(null);
    setAno(null); setAnoNome(null);
    setModelos([]); setAnos([]);
    setResultado(null);
    setLoading(true);
    try {
      const req = await fetch(`${API_BASE}/carros/marcas/${codigo}/modelos`);
      const resp = await req.json();
      setModelos(resp.modelos || resp);
    } catch (err) {
      setErro('Erro ao buscar modelos.');
    } finally {
      setLoading(false);
    }
  }

  async function handleModelo(codigo, nome) {
    setModelo(codigo);
    setModeloNome(nome);
    setAno(null); setAnoNome(null);
    setAnos([]);
    setResultado(null);
    setLoading(true);
    try {
      const req = await fetch(`${API_BASE}/carros/marcas/${marca}/modelos/${codigo}/anos`);
      const resp = await req.json();
      setAnos(resp);
    } catch (err) {
      setErro('Erro ao buscar anos.');
    } finally {
      setLoading(false);
    }
  }

  function handleAno(codigo, nome) {
    setAno(codigo);
    setAnoNome(nome);
    setResultado(null);
  }

  async function handleVerValor() {
    setResultado(null);
    setErro(null);
    setLoading(true);
    try {
      const req = await fetch(`${API_BASE}/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
      const resp = await req.json();
      setResultado(resp);
    } catch (err) {
      setErro('Erro ao buscar valor FIPE.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.sav}>
        <ScrollView contentContainerStyle={styles.container}>

          
          <Image
            source={require('./assets/logomarca_gatito.webp')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>Gatito FIPE</Text>

          
          <Button
            mode="contained"
            onPress={handleConsultar}
            style={styles.btnConsultar}
          >
            Consultar Tabela FIPE
          </Button>

          {loading && <ActivityIndicator style={styles.loading} color="#1a237e" />}
          {erro ? <Text style={styles.erro}>{erro}</Text> : null}

          
          {iniciado && !loading && marcas.length > 0 && !marca && (
            <Card style={styles.card}>
              <Text style={styles.label}>Selecione a marca:</Text>
              <FlatList
                data={marcas}
                keyExtractor={(item) => item.codigo}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleMarca(item.codigo, item.nome)}
                  >
                    <Text style={styles.itemTexto}>{item.nome}</Text>
                  </TouchableOpacity>
                )}
              />
            </Card>
          )}

          
          {marcaNome && (
            <Card style={styles.cardSelecionado}>
              <Text style={styles.labelSelecionado}>Marca: {marcaNome}</Text>
            </Card>
          )}

          
          {marca && !loading && modelos.length > 0 && !modelo && (
            <Card style={styles.card}>
              <Text style={styles.label}>Selecione o modelo:</Text>
              <FlatList
                data={modelos}
                keyExtractor={(item) => item.codigo}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleModelo(item.codigo, item.nome)}
                  >
                    <Text style={styles.itemTexto}>{item.nome}</Text>
                  </TouchableOpacity>
                )}
              />
            </Card>
          )}

          
          {modeloNome && (
            <Card style={styles.cardSelecionado}>
              <Text style={styles.labelSelecionado}>Modelo: {modeloNome}</Text>
            </Card>
          )}

          
          {modelo && !loading && anos.length > 0 && !ano && (
            <Card style={styles.card}>
              <Text style={styles.label}>Selecione o ano:</Text>
              <FlatList
                data={anos}
                keyExtractor={(item) => item.codigo}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleAno(item.codigo, item.nome)}
                  >
                    <Text style={styles.itemTexto}>{item.nome}</Text>
                  </TouchableOpacity>
                )}
              />
            </Card>
          )}

          
          {anoNome && (
            <Card style={styles.cardSelecionado}>
              <Text style={styles.labelSelecionado}>Ano: {anoNome}</Text>
            </Card>
          )}

          
          {ano && !loading && (
            <Button
              mode="contained"
              onPress={handleVerValor}
              style={styles.btnValor}
            >
              Ver valor FIPE
            </Button>
          )}

          
          {resultado && (
            <Card style={styles.cardResultado}>
              <Text style={styles.resultadoMarca}>{resultado.Marca} - {resultado.Modelo}</Text>
              <Text style={styles.resultadoAno}>{resultado.AnoModelo} • {resultado.Combustivel}</Text>
              <Text style={styles.resultadoValor}>{resultado.Valor}</Text>
            </Card>
          )}

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}