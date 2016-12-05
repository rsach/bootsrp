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

    this.container = this.el1.nativeElement;
    console.log(this.el1);

    this.sidebar = this.container.lastElementChild.firstElementChild.firstElementChild.clientHeight
    console.log(this.sidebar)

    this.totalScroll = this.container.offsetParent.clientHeight
    this.row = this.container.clientHeight

    this.windowHeight = this.container.ownerDocument.defaultView.innerHeight

    this.offsetTop = this.container.parentNode.offsetParent.children["0"].children["0"].clientHeight

    this.footer  = this.container.parentNode.parentNode.parentElement.children[2].clientHeight;
    this.scrollFinish = this.totalScroll -this.footer - this.windowHeight ;

    this.sidebarTop = this.scrollFinish - this.sidebar - 20;


    //console.log(this.sticky)



    //`console.log(this.offsetTop,this.totalScroll,this.row,this.sticky,this.windowHeight,this.footer);

  }

  ngOnInit(){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.container_resize = this.el1.nativeElement;

    this.sidebar = this.container.lastElementChild.firstElementChild.firstElementChild.clientHeight

    this.totalScroll = this.container_resize.offsetParent.clientHeight
    this.row = this.container_resize.clientHeight

    this.windowHeight = this.container_resize.ownerDocument.defaultView.innerHeight

    this.offsetTop = this.container_resize.parentNode.offsetParent.children["0"].children["0"].clientHeight

    this.footer  = this.container_resize.parentNode.parentNode.parentElement.children[2].clientHeight;
    this.scrollFinish = this.totalScroll -this.footer - this.windowHeight ;

    this.sidebarTop = this.scrollFinish - this.sidebar - 20;





  }





  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {

    //console.log(this.sidebar,this.totalScroll,this.row,this.windowHeight,this.offsetTop,this.footer)
    let number = this.scrollbarYPos();
    if(number<this.offsetTop && this.flag){
      this.fixed ='absolute';
      this.top=0;
      this.flag=false
    }else if(number < this.scrollFinish 	 && number > this.offsetTop && !this.flag ){
      this.fixed = 'fixed';
      this.top=60
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


}
