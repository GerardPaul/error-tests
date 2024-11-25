console.log('This script will throw an error after 1 minute...');

setTimeout(() => {
  throw new Error('Simulated error: Script execution failed!');
}, 60000);
