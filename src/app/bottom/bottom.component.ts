import { Component, OnInit , ElementRef } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor(private el:ElementRef) {
    //console.log(this.el);

  }

  ngOnInit() {
  }

}
