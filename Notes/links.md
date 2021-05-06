# Important links we will use to reference

## Example of code that will persist memory
### https://javascript.plainenglish.io/how-to-persist-state-with-localstorage-in-angular-42a4a47ed123
### home.components.ts
```
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  public firstname: string = '';
  public lastname: string = '';
  public age: any = null;
  public queryKey!: string;
  public removeKey!: string;
  public queryResult!: string;
  public person = {firstName: this.firstname, lastName: this.lastname, age: this.age }
  public addPerson(){
    this.person.firstName = this.firstname
    this.person.age = this.age;
    this.person.lastName = this.lastname;
    this.localStorageService.setItem(this.firstname,  JSON.stringify(this.person))
  }
  public getPerson(nameToRemove:string){
    this.queryResult! = this.localStorageService.getItem(nameToRemove) || "";
  }
  public deletePerson(nameToDelete:string){
    this.localStorageService.removeItem(nameToDelete);
  }
  public reset(){
    this.localStorageService.clear();
  }


  ngOnInit(): void {
  }

}

```

### Home.component.html
```
 <h4> Add person </h4>
    <table>
      <tr>
        <td>Firstname</td>
       <td> <input [(ngModel)]="firstname" name="firstname" type="text"></td>
     </tr>
     <tr>
       <td>Lastname</td>
       <td> <input [(ngModel)]="lastname" name="lastname" type="text"></td> 
     </tr>
    <tr> 
      <td>Age</td> 
      <td> <input [(ngModel)]="age" name="age" type="number"></td> </tr>
  <tr> <td></td> <td><button (click)="addPerson()">Add</button></td>
  </tr>
  </table>
  <h4> Get person </h4>
  <input [(ngModel)]="queryKey" name="queryKey" type="text"><br>
  <button (click)="getPerson(queryKey)"> Get </button>
  <h4>Result</h4>
  {{queryResult}}
  <h4> Delete person</h4>
    <input [(ngModel)]="removeKey" name="removeKey" type="text"> <br>
    <button (click)="deletePerson(removeKey)"> Delete </button>
  <h4> Reset store </h4>
  <button (click)="reset()"> Reset </button>
```