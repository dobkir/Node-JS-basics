// console.log(process.argv);

function consoleToJSON() {
  const consl = {};

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=');
    consl[arg[0]] = arg[1] ? arg[1] : true;
  }

  return consl;
}

console.log(consoleToJSON());
