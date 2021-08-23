const {CRUD} = require('./helpers');
const db = require('./models');

/**
 * Each command that we execute in NODE console, it is saved inside a file named process, which in turn, it is inside another file named ARGV
 */
const params = process.argv;


if (params.length <= 2) {
    process.exit(0); //It breaks the flow of the program
}

const args = params.slice(2); //It gets the file ahead of 2 position
/**
 * The following lines are for something related to this:
 * --create:Contact --firstname=Testname
 */
const commands = args[0].split(":")[0].substr(2);
const entity = args[0].split(":")[1];

switch (commands) {
    case CRUD.CREATE:
        const data = {};
        args.splice(1).map(arg => {
            const tmp = arg.split("=");
            data[tmp[0].substr(2)] = tmp[1];
        });
        db[entity].create(data)
            .then(() => {console.log("Contact Created")})
            .catch(console.log);
        break;
    case CRUD.READ:
        db[entity]
        .findAll()
        .then(console.log)
        .catch(console.log)
        break;
    case CRUD.UPDATE:
        console.log("Created!!!")
        break;
    case CRUD.DELETE:
        console.log("Created!!!")
        break;
    default:
        console.log("Opetarion not found!!!")
        break;
}

