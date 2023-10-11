const queries = require('../db_schema');

const checkEmailExists = (email) =>{
    const params = [email];
    const query = "SELECT * from user1 WHERE email = $1"
    return queries.executeGivenQuery(query,params)
}


const addUserQuery = (email,password) => {
    const params = [email, password];
    const query = "INSERT INTO user1(email, password) VALUES ($1, $2)"
    return queries.executeGivenQuery(query,params)
  }

  module.exports={
    checkEmailExists,
    addUserQuery
  }