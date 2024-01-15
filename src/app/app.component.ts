import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyMathPipe } from './my-math.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MyMathPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularDemo';

  message:string="This is in h2 tag";

  city:string="Pune";

  isDisable:boolean=false;

  display(){
    let res=confirm("Do you want to make payment?");
    if(res == true){
      alert('Payment Done');
    }
    else{
      alert('Payment Cancelled');
    }
  }
}
