import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @ViewChild('userName') userName:ElementRef;
  showInputField: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Form Declaration
    this.user_insertForm = new FormGroup({
      user_name: new FormControl("", [Validators.required]),
    });
    this.masterDataSelect = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula m. Keith"]
  }

  displayAssignMethod = (e: any) => {
    if (e.target.value == '@') {
      this.autocomplete.openPanel();
    }
    else {
      this.autocomplete.closePanel();
    }
  };
  eSelectUser(data: any) {
    console.log(data);
    if (!this.selectData.includes(data)) {
      this.selectData.push(data);
    }
    console.log(this.selectData);
    this.user_insertForm.reset();
  }

  // remove_chip
  removeVal(i: any) {
    const index = this.selectData.indexOf(i);    
    if (index > -1) {
      this.selectData.splice(index, 1);
    }
    console.log(this.selectData);
  }
  
  // reset Button
  resetTextarea() {
    this.selectData = [];
  }
  // Add Note
  add_coloum = () => {
    this.showInputField = true;
    setTimeout(() => this.userName.nativeElement.focus());
  }

}

