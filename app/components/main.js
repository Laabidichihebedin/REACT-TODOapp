import React from 'react';
import {
     StyleSheet,
     Text,
     View,
     TextInput,
     ScrollView,
     TouchableOpacity
     } from 'react-native';
     import Note from './note';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteArray:[],
      noteText:'',
    }
  }




    render(){
let notes = this.state.noteArray.map((val, key) => {
  return <Note key={key} keyval={key} val={val}
  deleteMethod={ ()=> this.deleteNote(key) } />
});



        return (
            <View style={styles.container}>
              <View style={styles.header}>
              <Text style={styles.headerText}>My ToDo list :)</Text>
            </View>
             
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <View style={styles.footer}>

              <TextInput 
                style={styles.textInput} 
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                placeholder='Task'
                placeholderTextColor='white'
                underlineColorAndroid='transparent'>
              </TextInput>
          </View>

          <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>add</Text>
          </TouchableOpacity>

            </View>
          );       
    }
    // hedhi loutaa mte3 l ajout d une tache (task)
    addTask() {
     if (this.state.noteText){
       var d = new Date();

       this.state.noteArray.push({
        'date' : d.getFullYear()+
        '/' +(d.getMonth() +1)+
        '/' + d.getDate(),
        'note':this.state.noteText

       });

       this.setState({noteArray: this.state.noteArray});
       this.setState({noteText: this.state.noteText});
     }
  }
 
}

// css mte3 Main.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //hedhouma zina te3 header eli hya lbande li m foug
  header: {
    backgroundColor: '#F16555',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Arial-BoldMT',
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  // eli louta hedhom zina te3 boutton
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#15A2A0',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});