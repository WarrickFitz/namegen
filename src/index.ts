import {nameGen} from './nameGen';

const myArgs = process.argv.slice(2);
const nameHint = myArgs[0];

if(nameHint === undefined) {

    console.log("Error, no name hint supplied");
    
} else {

    console.log('nameHint = ' + nameHint);

    const ng = new nameGen();
    const res = ng.generateNames(nameHint);
    console.log(res);
    
}
 

