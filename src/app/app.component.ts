import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Raghunath';
  email = "";
  toggleDiv = true;
  handleClickEvent() {
    // alert("function called")
    console.log("Function called")
    this.otherFunction()
  }
  otherFunction() {
    console.log("Other function called")
  }

  inputEvent(event: Event) {
    console.log(event);
    console.log((event.target as HTMLInputElement).value);
  }

  getEmail(val: string) {
    this.email = val;
    console.log(this.email);
  }
  setEmail() {

    this.email = "default@gmail.com";
    console.log(this.email);
  }


  toggle() {
    this.toggleDiv = !this.toggleDiv;
  }

  users = ["raghu", "Tonny", "John"];
  count = signal(10);

  // constructor() {
  //   effect(() => {
  //     console.log(this.count());
  //   })

  // }

  increaseSIgnal() {
   this.count.set(this.count() + 1);
   this.count.update((val)=>val+1);//this update method is only applicable for number data type only
  }

  data = signal<number | string>(200);
  data1:WritableSignal<number|string>=signal(225);
  data2:Signal<number|string>=computed(()=>37);//This is constant, can't change its value.

showSIgnal(){
  this.data.set("Raghunath");
  this.data1.set("Rana");
  console.log(this.data());
  console.log(this.data1());
  console.log(this.data2());
}

x=signal(10);
y=signal(20);
z=computed(()=>this.x()+this.y());//Z value dependent on x and y signals, so any changes in x and y signals, that will change the Z value
showValue(){
  console.log(this.z());
  this.y.set(100);
  console.log(this.z());
  this.x.set(200);
  console.log(this.z());
}

countval=signal(0);
displayHeading=false;
showHeading(){
this.countval.set(this.countval()+1);
}

constructor() {
    effect(() => {
      if(this.countval()==3 || this.countval()==5){
        this.displayHeading=true;
        setTimeout(() => {
          this.displayHeading=false;
        }, 2000);
      }else{
         this.displayHeading=false;
      }
    })

  }

 employees = [];

  name="rana";

//  To do list
  task = "";
  taskList: { id: number, task: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = "";
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id);
  }

  bgColor="red"
  //fontSize="50px"
  fontSize="50"
 

}
