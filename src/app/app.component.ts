import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RiskServiceComponent } from './RiskService.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  predictForm = { };
  submitted = false;
  predictionResult : any;

  constructor(private serv : RiskServiceComponent){
    
  }

  ageFromDateOfBirth(dateOfBirth : any):number{
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    if(today.getMonth() < birthDate.getMonth())
      age--
    else if(today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate())
      age--;
    return age;
  }
    
  onSubmit() {
    this.submitted = true;
    var userValues = {
      'age' : this.ageFromDateOfBirth(this.predictForm['dob']),
      'gender' : this.predictForm['gender'],
      'maritalStatus' : this.predictForm['maritalStatus'],
      'location' : this.predictForm['location']
    }
    this.serv.riskPrediction(userValues).subscribe((r)=>{
      var predObj = r;
      this.predictionResult = predObj;
    });
  }
}
