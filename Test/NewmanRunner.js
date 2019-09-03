const newman = require('newman');
var date = new Date();
var year = date.getFullYear();
var month_names = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];
var month = date.getMonth();
var time = date.getTime();


const path = 'C:/PostmanDemo';

newman.run({
    collection: require(path + `/Resource/JsonDemo.postman_collection.json`),
    // environment: require(sourceFile + '/postman_environment.json'),
    // iterationCount: 1,
    //iterationData: path + '/datafile.csv',
    reporters: ['htmlextra', 'cli'],
    reporter: {
        htmlextra: {
            export: `${path}/TestResults/${year}/${month_names[month]}/postman${time}.html`, // If not specified, the file will be written to `newman/` in the current working directory.
            darkTheme: true // optional, tells the reporter to use the `Dark Theme` template
        }
    }
}, function (err) {
    if (err) { throw err.message; }
    console.log('collection run complete!');
});