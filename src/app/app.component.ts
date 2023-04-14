import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SoumyaTestdemo';
  user_insertForm: FormGroup;
  masterDataSelect: any = [];
  selectData: any = [];
  useroptionList: boolean = true;
  selectedUser: any;

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  constructor() { }
  ngOnInit(): void {
    this.user_insertForm = new FormGroup({
      user_name: new FormControl("", [Validators.required]),
    });
    this.masterDataSelect = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula m. Keith"]
  }
  data = [];
  toggleSelection(e: any) { };
  displayAssignMethod(e: any) {
    // console.log(e.target.value);
    if (e.target.value == '@') {
      this.autocomplete.openPanel();
    }
    else {
      this.autocomplete.closePanel();
    }
    // console.log(this.useroptionList);


  };
  eSelectUser(data: any) {
    this.selectedUser = data;
    this.selectData.push(this.selectedUser);
    console.log(this.selectData);
    this.user_insertForm.reset();
  }
  ngAfterViewChecked() {
    console.log(this.user_insertForm.get('user_name')?.value);
    // if (this.user_insertForm.get('user_name')?.value != null || this.user_insertForm.get('user_name')?.value != undefined || this.user_insertForm.get('user_name')?.value != '') {

    if (this.user_insertForm.get('user_name')?.value == '@') {
      if (!this.selectData.includes(this.user_insertForm.get('user_name')?.value)) {
        this.selectData.push(this.user_insertForm.get('user_name')?.value);
      }
      // else{
      //   // this.selectData.pop(0);
      // }
     
      // this.user_insertForm.reset();
    
    console.log(this.selectData, "WWWW");
    }

  }
  choosedUserName = (event: any) => {
    console.log(event);

  }
  removeChip = (event:any) =>{
    console.log(event);
    this.selectData = this.selectData.filter(function (item: any) {
      if (item !== event) {
        return item;
      }
    });
    console.log(this.selectData);
    

  }
  resetTextarea() {
    this.selectData = [];
  }
}

