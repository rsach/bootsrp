import { Component, OnInit, HostListener, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit,AfterViewInit {

  constructor() { }

  @ViewChild('abcd') el1:ElementRef;

  container:any;
  container_resize:any;

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



  ngAfterViewInit() {

      this.calculatePosition();


  }

  

  ngOnInit(){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.calculatePosition()




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


    this.container = this.el1.nativeElement;

    this.sidebar = this.container.lastElementChild.firstElementChild.firstElementChild.clientHeight
    console.log(this.sidebar)

    this.totalScroll = this.container.offsetParent.clientHeight
    this.row = this.container.clientHeight

    this.windowHeight = this.container.ownerDocument.defaultView.innerHeight

    this.offsetTop = this.container.parentNode.offsetParent.children["0"].children["0"].clientHeight

    this.footer  = this.container.parentNode.parentNode.parentElement.children[2].clientHeight;
    this.scrollFinish = this.totalScroll -this.footer - this.windowHeight ;

    this.sidebarTop = this.scrollFinish - this.sidebar - 40;


    //console.log(this.sticky)



    console.log(this.offsetTop,this.totalScroll,this.row,this.windowHeight,this.footer,this.sidebar,this.scrollFinish,this.sidebarTop);

  }






}
