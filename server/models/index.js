var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages where message is not null', function(err, res) {
        if (err) {
          console.log('ERROR', err);
        }
        
        console.log('ALL MESSAGE', res);
      });
      
      
    }, // a function which produces all the messages
    post: function (message) {
      console.log('message post ', message);
      db.query('insert into messages SET ?', message, function(err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log('Inserted res ', res);
        }
      });  
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT username from messages where username is not null', function(err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log('Inserted res ', res);
        }
      });
    },
    post: function (user) {
      db.query('insert into messages SET ?', user, function(err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log('Inserted res ', res);
        }
      });
    }
  }

};  //end of modEx