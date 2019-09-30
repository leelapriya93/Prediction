import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RiskServiceComponent {

    constructor(private http : Http){

    }

    riskPrediction(data : Object){
        return this.http.post('api_url',data).map(res=>{
            res.json();
        })
    }

}