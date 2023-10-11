const pool = require('./db_connection')

const queries =[
        `create table if not exists user1
        (
            email varchar(255) primary key, 
            password varchar(255)
        );`
        ,      
        `create table if not exists question
        (
            question_id serial primary key, 
            question_text text,
            user_email varchar(255), foreign key (user_email) references user1(email)
        );`
      ];
      

try {
    pool.query(queries.join(""), (error) => {
      if (error)
      { 
        console.log(error.message)
        throw error;
    }
      console.log("Schema created successfully");
    });
} 
catch (error) {
    if (error.code === "ER_BAD_DB_ERROR") {
      console.error("Database 'test' does not exist. Please create it.");
    } else {
      console.error(error);
    }
}
const executeGivenQuery = (query,params) => {
     return new Promise((resolve, reject) => {
       pool.query(query, params, (error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          //console.log(result);
          resolve(result);
        }
      });
    });
  };
  console.log(" 2. db schema file working properly");
  module.exports = {executeGivenQuery , pool};