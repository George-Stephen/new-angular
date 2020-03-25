import { Component , OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}

