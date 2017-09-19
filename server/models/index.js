var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      db.dbConnection(function(err) {
        if (err) {
          console.log(err);
        } else {
          var sql = 'UPDATE messages SET username = user';
          db.dbConnection(sql, function(err, result) {
            if (err) {
              console.log(err);
            }
            console.log(result.affectedRows + " record(s) updated");
          });
        }
      });
    }
  }

};  //end of modEx