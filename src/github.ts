import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class GitHub{
    http: HttpClient;
    repos: {};
    constructor(http)
    {
        this.http = http;
        this.http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/users/jj09/repos');
        });
    } 

    activate(){
        return this.http.fetch("")
                .then(response => response.json())
                .then(repos => this.repos = repos)
    }
}