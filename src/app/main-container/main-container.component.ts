import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit{
   contact !: { firstname: string; lastname: string; gender: string; isToc: boolean; email: string; } 
  // contact!: { firstname: ''; lastname: ''; gender: ''; isToc: false; email: ''; }; 

 

  
  ngOnInit(){
      this.contact.firstname='';
   this.contact.lastname='';
   this.contact.gender='male';
   this.contact.isToc=true;
   this.contact.email='';
      
  }
  onSubmit(contactForm:any){
    console.log(contactForm.value)
}

}