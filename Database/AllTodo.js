import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Realm from 'realm';

const TodoSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};
const AllTodo = () => {
  // input fields data
  const [text, setText] = React.useState('');
  const [status, setStatus] = React.useState('checked');

  // realm related variables
  const [realm, setRealm] = React.useState(null);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    (async () => {
      // initialize realm...
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [TodoSchema],
      }).then(realm => {
        // load data in the database...
        const tasks = realm.objects('Task');

        setTasks([...tasks]);
        setRealm(realm);

        // data is updated
        try {
          tasks.addListener(() => {
            setTasks([...tasks]);
          });
        } catch (error) {
          console.error(`Error updating tasks: ${error}`);
        }
      });
    })();
  }, []);

  // ### deleting of tasks

  const deleteTask = task => {
    realm.write(() => {
      try {
        let myTask = realm.objectForPrimaryKey('Task', task._id);
        realm.delete(myTask);
        myTask = null;
        realm.refresh();
      } catch (error) {
        console.log('delete', error);
      }
    });
  };

  const adddTask = () => {
    realm.write(() => {
      task5 = realm.create('Task', {
        _id: Date.now(),
        name: text,
        dateCreated: Date.now(),
        status: status == 'checked' ? 'Closed' : 'Open',
      });
    });

    setText('');
    setStatus('');
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={text => setText(text)}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderBottomColor: '#000',
          borderBottomWidth: 1,
        }}
      />

      <TouchableOpacity
        onPress={() => adddTask()}
        style={{alignItems: 'center', paddingTop: 10}}>
        <Text>Add Todo</Text>
      </TouchableOpacity>

      <View>
        {tasks?.map(task => {
          return (
            <View key={task._id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{paddingVertical: 10, flexDirection: 'row'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {task.name}
                      </Text>
                      <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {task.dateCreated}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteTask(task)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AllTodo;
