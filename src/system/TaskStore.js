let TaskStore = {
  rows: [
    {
      name: "Upcoming",
      tasks: [
        { id: 0, description: "Test Task" },
        { id: 2, description: "2Test 2Task" }
      ]
    },
    { name: "In Progress", tasks: [] },
    { name: "Complete", tasks: [] }
  ],
  subscribers: [],
  subscribe: function (callback) {
    this.subscribers.push(callback);
  },

  updateSubscribers: function () {
    this.subscribers.forEach((callback) => {
      callback();
    });
  },
  addTask: function (addCommand) {
    let tmpTasks = this.rows[addCommand.row].tasks;

    this.rows[addCommand.row].tasks = [
      ...tmpTasks,
      {
        id: Math.floor(Math.random() * 100000000),
        description: addCommand.description
      }
    ];

    this.updateSubscribers();
  }
};

function AddCommand(row, description) {
  this.row = row;
  this.description = description;
}
export { TaskStore, AddCommand };
