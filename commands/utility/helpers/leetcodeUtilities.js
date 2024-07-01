/**
 * leetcodeUtilities module handles all requests to leetcode
 * @author Brenden Haskins
 */

const { cookie } = require('../../../config.json');

async function executeIdToSlug(Id) {
    var myHeaders = new Headers();
    const problems = {};

    myHeaders.append("Cookie", cookie);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };


    const response = await fetch("https://leetcode.com/api/problems/all/", requestOptions)
    const result = await response.json();

    parseResult(result);

    function parseResult(result) {
        statPairs = result['stat_status_pairs'];

        statPairs.forEach((problem) => {
            const questionId = problem.stat.frontend_question_id.toString();
            const questionSlug = problem.stat.question__title_slug;
            problems[questionId] = questionSlug;
        });
    }
  

    return problems[Id];
}
  module.exports = {
    executeIdToSlug
};


