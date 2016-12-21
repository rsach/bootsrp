import { Component, OnInit, HostListener, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit,AfterViewInit {

  constructor(private dom:BrowserDomAdapter) { }

  fixed:string ='absolute';
  top:number = 0;
  flag:boolean = true;
  scrollFinish:number = 0;

  footer:number = 0;
  offsetTop:number =0;
  totalScroll:number = 0;
  row:number =0;
  windowHeight:number = 0;
  sidebarTop:number = 0;

  sidebar:number = 0;


  @HostListener('window:resize', ['$event'])
  ngAfterViewInit() {

      this.calculatePosition();
      


  }



  ngOnInit(){

  }








  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {

    //console.log(this.sidebarTop,this.totalScroll,this.row,this.windowHeight,this.offsetTop,this.footer)
    let number = this.scrollbarYPos();
    if(number<this.offsetTop-50 && this.flag){
      this.fixed ='absolute';
      this.top=0;
      console.log(number)
      this.flag=false
    }else if(number < this.scrollFinish 	 && number > this.offsetTop-50 && !this.flag ){
      this.fixed = 'fixed';
      this.top=60;
            console.log(number)

      this.flag=true;



    }else if (number >this.scrollFinish  && this.flag){
      this.fixed = 'absolute';

      this.top= this.sidebarTop
      console.log(this.top,this.sidebar)

      this.flag = false;
    }





  }



  private scrollbarYPos(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }


  calculatePosition(){



    this.sidebar = this.dom.query('#fixy').clientHeight

    this.totalScroll = this.dom.query('#root').clientHeight
    this.row = this.dom.query('#middle').clientHeight;

    this.windowHeight = window.innerHeight;

    this.offsetTop = this.dom.query('#start').clientHeight;

    this.footer  = this.dom.query('#bottom').clientHeight;
    this.scrollFinish = this.totalScroll -this.footer - this.windowHeight ;

    this.sidebarTop = this.scrollFinish - this.sidebar - 40;


    



    
  }


  






}
