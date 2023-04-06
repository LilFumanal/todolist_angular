import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(task: Task) { }


  createTask() {
    let task = new Task();
    task.id = 1;
    task.text="Faire ça!"
    }
}
