require('dotenv').config();

const exec = require('child_process').exec;
const cmd = `./node_modules/s3-deploy/.bin/s3-deploy './dist/**' --cwd './dist/' --region ap-southeast-1 --bucket runwithlowly.com`;

exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
});

