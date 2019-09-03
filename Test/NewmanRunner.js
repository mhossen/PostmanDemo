const newman = require('newman');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
const path = 'C:/PostmanDemo';

newman.run({
    collection: require(path + `/Resource/JsonDemo.postman_collection.json`),
   // environment: require(sourceFile + '/rptLocalHost.postman_environment.json'),
    // iterationCount: 1,
    //iterationData: sourceFile + '/dealerData.csv',
    reporters: ['htmlextra','cli'],
    reporter: {
        htmlextra: {
            export: `${path}/TestResults/${year}/${month}/postman.html`, // If not specified, the file will be written to `newman/` in the current working directory.
            darkTheme: true // optional, tells the reporter to use the `Dark Theme` template
        }
    }
}, function (err) {
    if (err) { throw err.message; }
    console.log('collection run complete!');
});