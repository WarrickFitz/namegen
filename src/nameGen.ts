import {nouns, adjectives} from './words'
import {JsonRpc} from 'eosjs';
import { promises } from 'dns';
const fetch = require("node-fetch");

export const apiUrl = "https://api.pennstation.eosnewyork.io:7101";

export class nameGen {
    generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateNames(genRoot: string) : string[] {

        if (genRoot.length === 0) {
        var choices = nouns.filter(word => {
            return word.length <= 8;
        });
        genRoot = choices[this.generateRandomNumber(0, choices.length)];
        }

        var len = 12 - genRoot.length;
        var adjs = adjectives.filter(word => {
            return word.length === len;
        });
        
        var names = adjs.map(e => {
            return e + genRoot;
        });

        return names;
    }

    async checkName(name: string) : Promise<boolean> {
      //Note you don't need { fetch } when not in nodejs
      var rpc = new JsonRpc(apiUrl, { fetch });
      let taken: boolean = false;
      
      
      try {

        let test = await rpc.get_account(name);
        taken = true;
  
      } catch(error) {

        taken = false;

      }
      return taken;

    }

  
}