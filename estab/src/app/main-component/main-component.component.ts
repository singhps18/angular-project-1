import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {
  constructor(private http:HttpClient ){

  }
  currentPage=10;
  // pageContent=document.getElementById("contents");
  // pagination = document.getElementById('pagination');
  // startIndex =document.getElementById("prev");
  // nextIndex =document.getElementById("next");
  

  ngOnInit() {
    this.getData();
  }
  responseData: any = []; 
    getData() {
      this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
        this.responseData = data.products; 
       
      });
    }


    


}
