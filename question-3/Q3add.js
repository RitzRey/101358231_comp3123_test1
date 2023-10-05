// 101358231, Ritchel Rey Etchorre, LabTest1 Q3

const fs = require('fs');
const path = require('path');

// stores path for where logs directory is to be made
const logsDirectory = path.join('C:', 'Users', 'Ritchel', 'Desktop', 'Fall2023',
 'Comp3123FullStackDevelopment1', 'LAB-TEST-1', 'question-3', 'Logs');
// store in const numofLogFiles the amount of log files to be made
const numOfLogFiles = 10;

// addLogsDirectory function
function addLogsDirectory(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log(`Created directory at the following: "${directoryPath}"`);
  }
}

// addLogFiles function
function addLogFiles(directoryPath, numOfFiles) {
  for (let i = 1; i <= numOfFiles; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(directoryPath, fileName);

    fs.writeFileSync(filePath, `Log file ${i} content.`);
    // outputs file names to console
    console.log(`Created log file "${fileName}"`);
  }
}

// calls addLogsDirectory function to make 
addLogsDirectory(logsDirectory);

// change the current process to the new Logs directory
process.chdir(logsDirectory);

// calls addLogFiles function to make 10 files in the logs directory path
addLogFiles(logsDirectory, numOfLogFiles);

