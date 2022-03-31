// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import * as faucet from '../ithacanet.json';
const coordGeo = "12*12*88";
     const dateNaissance = "12-12-2022";
               const idCni="1131313";
               const idNumeroT="11123445";
               const lieuNaissance= "Bonaberi";
         const       limite= "120*656";
        const         local="Douala";
         const       noms= "Kevin";
            const     prenoms= "Jane"

export class App {
    private tezos: TezosToolkit;
    


    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
 
    }

    public getBalance(address: string) : void {
        this.tezos.rpc
            .getBalance(address)
            .then(balance => console.log(balance))
            .catch(e => console.log('Address not found'));
    }

    public getContractEntrypoints(address: string) {
        this.tezos.contract
            .at(address)
            .then((c) => {
                let methods = c.parameterSchema.ExtractSignatures();
                console.log(JSON.stringify(methods, null, 2));
            })
            .catch((error) => console.log(`Error: ${error}`));
    }

    public addterrain(contract: string) {
        this.tezos.contract
            .at(contract) // step 1
            .then((contract) => {

                console.log(`Add new Land Title ...`);
                return contract.methods.addterrain( coordGeo ,
                dateNaissance,
            idCni,
                idNumeroT,
                lieuNaissance,
                limite,
                local,
                noms,
                prenoms).send(); // steps 2, 3 and 4
                })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`);
                return op.confirmation(3).then(() => op.hash); // step 5
            })
            .then((hash) => console.log(`Operation injected: https://ithacanet.smartpy.io/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`,error));
    }
    public getAllTitrefoncier(  contract: string) {
        this.tezos.contract
            .at(contract) // step 1
            .then((contract) => {

                console.log(`Incrementing storage value by ...`);
                return contract.methods.getAllTitrefoncier().send(); // steps 2, 3 and 4
                })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`);
                return op.confirmation(3).then(() => op.hash); // step 5
            })
            .then((hash) => console.log(`Operation injected: https://ithacanet.smartpy.io/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`,error));
    }
    public async main() { }
}