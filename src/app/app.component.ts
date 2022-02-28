import { Component } from '@angular/core';
import { studentInterface } from './type/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks:studentInterface[] = []
  public taskName:string = "";
  public obj? : object;
  public editMode:boolean = false;
  public editedIndex:number = 0;
  title = 'todo-list';

  addTask() {
    if (this.taskName == "") {
      alert("Input Is Empty Please Fill it Up")
    } else {
      this.tasks.push(
        this.obj = {
          taskName : this.taskName
        }
      )
      this.taskName = ""
    }
  }

  delete(i:number){
    this.tasks = this.tasks.filter((_, index) => index!=i)
    alert("Task Deleted")
  }

  edit(i:number){
    this.editMode = true;
    this.editedIndex = i;
    this.taskName = this.tasks[i].taskName
  }
  
  save(){
    if (this.taskName == ""){
      alert("Input Is Empty Please Fill it Up")
      this.editMode = true;
    } else {
      this.tasks[this.editedIndex] = {taskName:this.taskName};
      this.taskName = "";
      this.editMode = false;
    }
  }
}