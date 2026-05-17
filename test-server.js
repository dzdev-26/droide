const { exec } = require('child_process');
const child = exec('npx tsx server.ts');
child.stdout.on('data', console.log);
child.stderr.on('data', console.error);
setTimeout(() => { process.exit(0); }, 3000);
