import { Component, OnInit ,Inject,Output,EventEmitter,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from '@angular/core';







@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit,AfterViewInit {
  height:number = 50;
  width:number = 50;
  startPage:boolean = false;
  navbar:string ='fadeInDown' ;
  start:string ;
  visibility:string = 'hidden';
  navbarCl:string='';
  scroll:number =10;

  view:boolean = true;

  @Output() navbarH =  new EventEmitter();
  @ViewChild('navbar') el:ElementRef;

  container:any;
  navHeight:number=0;


  constructor(@Inject(DOCUMENT) private document: Document) { }

ngOnInit() {

  this.width = window.innerWidth;
  this.height = window.innerHeight;
}


ngAfterViewInit(){
  this.container = this.el.nativeElement;
  this.navHeight = this.container.clientHeight;

  this.navbarH.emit({
    value: this.navHeight

  })
}

@HostListener('window:resize', ['$event'])
onResize(event) {
  this.width = event.target.innerWidth;
  this.height = event.target.innerHeight;
}




@HostListener("window:scroll", ['$event'])
onWindowScroll() {


  let number = this.document.body.scrollTop;
  if (number > 100) {
    this.navbarCl = 'fixed-theme';


  } else if (number < 10) {
    this.navbarCl = ''

  }





}



}
