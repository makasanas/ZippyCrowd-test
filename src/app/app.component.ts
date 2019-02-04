import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public getRecommendations:any;
  public initialSkills = ['Beautician', 'Coiffeur', 'Coiffeuse', 'Cosmetologist', 'Hair stylist', 'Hairdresser'];
  public isSkillSelected:boolean = false;
  public isSkillChange:boolean= false;
  public tempLocation = '';

  constructor(private formBuilder: FormBuilder) {
		this.getRecommendations = this.formBuilder.group({
      'skill': [''],
      'location': [''],
      'isLocation':false
		});
  }


  locationOnChange(){
    if(this.getRecommendations.get('isLocation').value){
      this.tempLocation = this.getRecommendations.get('location').value;
      this.getRecommendations.get('location').setValue('');
    }else{
      this.getRecommendations.get('location').setValue(this.tempLocation);
    }
  }

  selectSkill(skill){
    this.getRecommendations.get('skill').setValue(skill);
    this.isSkillSelected = true;
    this.isSkillChange = true;
  }
  
  getRecommendation(){
    if(this.isSkillSelected){
      console.log(this.getRecommendations.value);
      this.getRecommendations.reset({'skill':''});
      this.isSkillSelected = false;
      this.isSkillChange = false;
    }
  }
}
