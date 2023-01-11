import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit{
  //  contact !: { firstname: string; lastname: string; gender: string; isToc: boolean; email: string; } 
  contact={
    firstname:'',
    lastname:'',
    gender:'male',
    isToc:false,
    email:'',
    age:''

  }
  integerRegex=/^\d+$/

  // emailRegex=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

  ngOnInit(){
  //     this.contact.firstname='';
  //  this.contact.lastname='';
  //  this.contact.gender='male';
  //  this.contact.isToc=true;
  //  this.contact.email='';
      
  }
  onSubmit(){
    // console.log(contactForm.value)
    console.log(this.contact)
}

}