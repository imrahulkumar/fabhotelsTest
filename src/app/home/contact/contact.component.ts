import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
pageSize: number=5;
totalPage:number;
currentPage:number=1;

  data: any = [{
    sno: 1,
    name: "rahul",
    age: 34
  },
  {
    sno: 2,
    name: "rahula",
    age: 34
  },
  {
    sno: 3,
    name: "srahul",
    age: 37
  },
  {
    sno: 4,
    name: "rahulf",
    age: 12
  },
  {
    sno: 5,
    name: "rahul",
    age: 34
  },
  {
    sno: 6,
    name: "rahul",
    age: 34
  },
  {
    sno: 7,
    name: "rahul",
    age: 34
  },
  {
    sno: 8,
    name: "rahul",
    age: 34
  },
  {
    sno: 9,
    name: "rahul",
    age: 34
  },
  {
    sno: 10,
    name: "rahul",
    age: 34
  },
  {
    sno: 11,
    name: "rahul",
    age: 34
  },
  {
    sno: 12,
    name: "rahul",
    age: 34
  },
  {
    sno: 13,
    name: "rahul",
    age: 34
  },
  {
    sno: 14,
    name: "rahul",
    age: 34
  },
  {
    sno: 15,
    name: "rahul",
    age: 34
  },
  {
    sno: 16,
    name: "rahul",
    age: 34
  },
  {
    sno: 17,
    name: "rahul",
    age: 34
  },
  {
    sno: 18,
    name: "rahul",
    age: 34
  },
  {
    sno: 19,
    name: "rahul",
    age: 34
  },
  {
    sno: 20,
    name: "rahul",
    age: 34
  },
  {
    sno: 21,
    name: "rahul",
    age: 34
  },

  ]


mydata:any=[];

  constructor() { }

  ngOnInit() {
    this.Mydata(0,this.pageSize)
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }


  RowPerPage(e)
  {
  this.pageSize =Number(e.target.value);
  console.log("page size",this.pageSize);
  this.Mydata(0,this.pageSize);
  }

  Mydata(startindex,lastindex)
  {
     this.totalPage =   Math.ceil(this.data.length / this.pageSize);
     if(lastindex + startindex<=this.data.length)
     {
      this.mydata = this.data.slice(startindex,lastindex + startindex);
     }
     else
     {
      this.mydata = this.data.slice(startindex,this.data.length);
     }
   
  }

  next(){
    debugger
    this.currentPage++;

    var skip = (this.currentPage -1)* this.pageSize;
    this.Mydata(skip,this.pageSize);
    
  }
  previous(){
    this.currentPage--;
    var skip = (this.currentPage -1)* this.pageSize;
    this.Mydata(skip,this.pageSize);

  }
  directPage(pageno)
  {
    console.log(pageno);
    this.currentPage = pageno;
    var skip = (this.currentPage -1)* this.pageSize;
    this.Mydata(skip,this.pageSize)
  }

  myfuncyion()
  {
    console.log("hey");
  }
 
}
