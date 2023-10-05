// 101358231, Ritchel Rey Etchorre, LabTest1 Q3

const fs = require('fs');
const path = require('path');

// stores path for where logs directory is to be made
const logsDirectory = path.join('C:', 'Users', 'Ritchel', 'Desktop', 'Fall2023',
 'Comp3123FullStackDevelopment1', 'LAB-TEST-1', 'question-3', 'Logs');

// removeLogFiles function
function removeLogFiles(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
      console.log(`Directory "${directoryPath}" does not exist.`);
      return;
    }
  
    const filesToDelete = fs.readdirSync(directoryPath);
  
    if (filesToDelete.length === 0) {
      console.log(`No files found in "${directoryPath}".`);
      return;
    }
    // output the file names to delete
    console.log('Files to delete:');
    filesToDelete.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      console.log(filePath);
      fs.unlinkSync(filePath);
    });
  }
  
  // removeLogsDirectory function
  function removeLogsDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
      console.log(`Directory "${directoryPath}" does not exist.`);
      return;
    }
  
    fs.rmdirSync(directoryPath);
    console.log(`Directory "${directoryPath}" has been removed.`);
  }

// calls removeLogFiles function to remove
removeLogFiles(logsDirectory);

// calls removeLogDirectory function to remove previously created log directory
removeLogsDirectory(logsDirectory);

