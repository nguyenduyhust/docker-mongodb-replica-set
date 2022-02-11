rsconf = {
  _id : "rs0",
  members: [
      {
          "_id": 0,
          "host": "mongodb1:27011",
          "priority": 3
      },
      {
          "_id": 1,
          "host": "mongodb2:27012",
          "priority": 2
      },
      {
          "_id": 2,
          "host": "mongodb3:27013",
          "priority": 1
      }
  ]
}

rs.initiate(rsconf);
