import {View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native'
import {useState} from 'react'



const app = () => {

  const [text, setText] = useState('')
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'toyota'
    },
    {
      id: 2,
      title: 'mercedes'
    },{
      id: 3,
      title: 'porshe'
    }
  ])


  const asd = () => {
    setItems(previousItems => (
      [{id: (previousItems.length + 1).toString(), title: text}, ...previousItems]
    ))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping list</Text>
      </View>
      <View style={styles.row}>
        <TextInput placeholder='Enter' value={text} onChangeText={word => setText(word)} style={{borderWidth: 1, borderColor: 'black', flex: 1, padding: 10}}></TextInput>
        <Button title='Add' onPress={asd}></Button>
      </View>
      <FlatList data={items} renderItem={({item}) => (
          <Text style={styles.listItem}>{item.title}</Text>
        )}/>
    </View>
  )
}


export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  },
  header: {
    backgroundColor: 'grey',
    marginTop: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItem: {
    backgroundColor: "purple",
    padding: 8,
    margin: 10,
    borderRadius: 10,
    color: 'white'
  }
})