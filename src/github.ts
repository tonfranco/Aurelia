import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

import {busy} from "./busy";

@autoinject
export class GitHub{
    private repos;
    nmBusca = "";
    message = "";

    constructor(private http: HttpClient, private busy:busy)
    {
        this.configurarApi();
    } 

    activate()
    {
        this.fetchData();
    }

    async fetchData()
    {
        this.busy.on();
        
        await this.busy.delay(3000);

        var data = this.http.fetch("")
                    .then(response => response.json())
                    .then(rep => this.repos = rep);

        this.busy.off();
    }

    pesquisar()
    {
        if(this.validateMe())
        {
            this.configurarApi();
            this.fetchData();
        }
    }

    private configurarApi()
    {
        this.busy.off();
        if(this.nmBusca == '')
            this.http.configure(config => {
                    config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/users/jj09/repos');
            });
        else
            this.http.configure(config => {
                    config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/users/'+ this.nmBusca + '/repos');
            });
    }

    validateMe() 
    {
        return true;
    }
}