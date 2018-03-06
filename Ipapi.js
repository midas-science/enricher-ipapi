"use strict";
var Ipapi = class Ipapi {

    constructor(rp, inputData, config) {
        //npm request-promise is used for handling requests
        //see: https://github.com/request/request-promise
        this.rp = rp;
        //loads inputData of the target file specified in the source object path in your config
        this.inputData = inputData;
        //loads config for this enrichment
        this.config = config;
    }

    getConfig() {
        return this.config;
    }

    getName() {
        return 'Ipapi';
    }

    setData(inputData) {
        this.inputData = inputData;
    }

    process(inputData) {

        if (typeof inputData !== 'undefined' && inputData != null) {
            this.inputData = inputData;
        }

        /* ipapi REST API 
        https://ipapi.co/api/

        Endpoint
        GET https://ipapi.co/{ip}/{format}/
     
        */

        let req_url = 'https://ipapi.co/' + this.inputData +'/json/';
        let options = {
            uri: req_url,
            headers: {
                'User-Agent': 'midas'
            },
            json: true // Automatically parses the JSON string in the response
        };

        return this.rp(options).then((result) => {
            let _result = [];

            try {
                delete result.ip;
                _result = result;
            } catch (e) {
                _result = null
            }

            return Promise.resolve(_result);
        }).catch((err) => {

            return Promise.resolve('ERROR HAPPENED');
        });

    }
};

module.exports.Ipapi = Ipapi;