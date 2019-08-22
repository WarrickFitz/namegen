import {nameGen} from './nameGen';

const myArgs = process.argv.slice(2);
const name = myArgs[0];

if(name === undefined) {

    console.log("Error, no name supplied");
    
} else {

    console.log('nameHint = ' + name);

    const ng = new nameGen();
    ng.checkName(name).then((taken: boolean) => {
        console.log("Taken: " + taken);
    });
    
}
 

