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
  notevalue: any = '';

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @ViewChild('userName') userName: ElementRef;
  showInputField: boolean = false;
  showAutcompleteList: boolean = false;
  elasticResDiv: any;
  notevalueSTAT: any;
  lastWord2: any;
  lastWord1:any;
  checkWord: boolean;

  constructor() { }

  ngOnInit(): void {
    // Form Declaration
    this.user_insertForm = new FormGroup({
      user_name: new FormControl("", [Validators.required]),
      // selectiveCols : new FormControl("", [Validators.required])
    });
    this.masterDataSelect = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula m. Keith"]
  }

  displayAssignMethod = (e: any) => {
    console.log(e.data);
    this.notevalueSTAT = e.target.value;
    console.log(this.notevalue);
    this.showInputField = false;
    if (e.data == '@') {
      // this.autocomplete.openPanel();
      this.showAutcompleteList = true;
      this.checkWord = true;
      this.notevalue = this.notevalueSTAT.replace(/@/g,'');
    }
    else {
      // this.autocomplete.closePanel();
      this.showAutcompleteList = false;
      this.checkWord = false;
      this.notevalue = this.notevalueSTAT;
    }
    console.log(this.notevalue);

  };



  eSelectUser(data: any) {
    console.log(data);
    this.showAutcompleteList = false;
    if (!this.selectData.includes(data)) {
      this.selectData.push(data);
    }
    this.elasticResDiv = data;    
    this.showInputField = true;
    this.notevalue += data.replace(new RegExp(this.notevalue, "gi"), (match: string) => {
      return match;
    });
    // console.log(this.notevalue);
    this.lastWord2 = this.notevalue.split(' ').pop();
    console.log(data.includes(this.lastWord2));
    if (data.includes(this.lastWord2) == true) {
      this.checkWord = true;
      
    }
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
    this.user_insertForm.reset();
  }
  // Add Note
  add_coloum = () => {
    // this.showInputField = true;
    setTimeout(() => this.userName.nativeElement.focus());
  }

}

