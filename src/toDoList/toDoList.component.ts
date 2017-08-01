import { OnInit, Component } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { Services } from '../services/services';

@Component({
  selector: 'toDoList',
  templateUrl: 'toDoList.component.html',
  styleUrls: ['toDoList.component.css']
})

export class toDoList implements OnInit{

  public toDoList: Array<string> = [];
  public inputValue: string = "";
  public showError: boolean = false;
  public errorMsg: string = "";

  private index: number = 0;

  constructor(private _service: Services){}

  ngOnInit(){
    let service: Observable = this._service.toDoService();

    service.subscribe((data: Array<string>) => {
      this.toDoList = data;
    });

    service.catch((error) => {
      console.log(error);
    });
  }

  getIndex(item) : number{
    return this.toDoList.indexOf(item);
  }

  edit(event): void{
    let target = event.target || event.srcElement || event.currentTarget;
    let value = target.nodeValue;

    this.index = this.getIndex(value);

    this.inputValue = value;
  }

  remove(event): void{
    let target = event.target || event.srcElement || event.currentTarget;
    let value = target.nodeValue;

    this.index = this.getIndex(value);

    this.toDoList.slice(this.index, 1);
  }

  saveValue(): void{
    this.showError = false;
    if(!!this.inputValue){
      this.toDoList[this.index] = this.inputValue;
    }else{
      this.showError = true;
      this.errorMsg = 'Please enter a value';
    }
  }
}
