import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

   const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>This is a modal...</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.modalText}>Close Modal</Text>
          </Pressable>

        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainer: {
    position: 'absolute',
    height: '30%',
    width: '100%',
    marginTop: 200,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'lightgrey',
    padding: 20, 
   
  },

  modalText: {
    fontSize:22,
    margin: 20,
  }
});
