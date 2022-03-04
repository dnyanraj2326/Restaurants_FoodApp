import Realm from "realm";
const TaskSchema = {
  name: "TodoTasks",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};
async function quickStart() {
  const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });
  // Add a couple of TodoTasks in a single, atomic transaction
  let task1, task2,task3 ;
  realm.write(() => {
    task1 = realm.create("TodoTasks", {
      _id:1,
      name: "go grocery shopping",
      status: "Open",
    });
    task2 = realm.create("TodoTasks", {
      _id:2,
      name: "go exercise",
      status: "Open",
    });
    task3 = realm.create("TodoTasks", {
      _id:3,
      name: "No NO Bakvas",
      status: "Closed",
    });
    console.log(`created three tasks: ${task1.name} & ${task2.name} & ${task3.name}`);
  });

  // ### Modify an Object
  realm.write(() => {
    task1.status = "InProgress";
  });

  // ### query realm for all instances of the "Task" type.
  const tasks = realm.objects("TodoTasks");
  console.log(`The all task is hear : 
    ${tasks.map((task, ind) => (
      task.name
      
    ))}
  `)

   // #### Delete the task from the realm.
  realm.write(() => {
    const delTask = realm.delete(task3);
    console.log(`Deleted task is hear : ${delTask}`)
    task3 = null;
  })

  const filters = tasks.filtered("status = 'Closed'");
  console.log(`Your filter items is hear : ${filters.map((filter) => filter.status)}`);
  
  realm.close();
  

}
quickStart().catch((error) => {
  console.log(`An error occurred: ${error}`);
});