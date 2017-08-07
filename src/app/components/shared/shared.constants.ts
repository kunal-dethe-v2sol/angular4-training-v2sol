export let mode: string = 'dev'; //possible values dev, qa, stg, prod

if (mode == 'dev') {
    var apiURL: string = 'http://localhost/angular4-training-v2sol/server/';
} else if (mode == 'qa') {
    var apiURL: string = 'http://localhost/angular4-training-v2sol/server/';
} else if (mode == 'stg') {
    var apiURL: string = 'http://localhost/angular4-training-v2sol/server/';
} else if (mode == 'prod') {
    var apiURL: string = 'http://localhost/angular4-training-v2sol/server/';
}

export let CONST: Object = {
    apiURL: apiURL
};