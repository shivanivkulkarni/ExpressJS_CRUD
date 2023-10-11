const queries = require('../db_schema');

const addQuestionQuery = (questionText, userEmail) => {
    const params = [questionText, userEmail];
    const query = "INSERT INTO question(question_text, user_email) VALUES ($1, $2)"
    return queries.executeGivenQuery(query,params)
}
const deleteQuestionQuery = (question_id,userEmail) => {
    const params = [question_id,userEmail];
    const query = "DELETE FROM question where question_id = $1 and user_email = $2"
    return queries.executeGivenQuery(query,params)

}

module.exports = {
    addQuestionQuery,
    deleteQuestionQuery,
}