import { Component } from '@angular/core';
import { JobService } from '@services/componenServices/commonServices/jobService';


@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private jobService: JobService) { 
      // this.jobService.getAll();
  }


  // get() {
  //   console.log("first")
  //   this.jobService.getAll();
  // }
}
