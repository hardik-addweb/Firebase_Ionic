import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserListing } from '../../../../../providers';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Routes, ActivatedRoute } from '@angular/router';


@Component({
  template: require('./ragisterform.component.html'),
})
export class RagisterFormComponent implements OnInit {

  id: number;
  private sub: any;
  public data:any;
  ragisterData:any=[];

  constructor(private userListing : UserListing,
    public slimLoadingBarService:SlimLoadingBarService,
    public toastr: ToastsManager,
    private route: ActivatedRoute
  ){

    this.slimLoadingBarService.start();
  }
  ngOnInit(){
    this.sub = this.route.queryParams.subscribe(params => {
        this.id =params['id']
         this.userListing.getBykey(params['id'])
         .then(res   =>{


           this.data= res;
           console.log('this.data',this.data);
           this.data.forEach(element =>{
            this.ragisterData=element;
           })
         })
      // .then(res => {
      // })
   });
   console.log('this.sub',this.sub)
  }
  ngAfterViewInit(){
    this.slimLoadingBarService.stop();
  }
  doSubmitAlldata(){
    this.slimLoadingBarService.start();
    this.userListing.setUsers(this.ragisterData)
    .then((res)=>{
       this.toastr.success(res.message, 'Success!');
      console.log('res==>',res);
      this.ragisterData=[];
      this.slimLoadingBarService.stop();
    })

  }
  doUpdatedata(data){
    this.userListing.updateBykey(data)
    .then((res)=>{
        this.toastr.success(res.message, 'Success!');
    })
  }
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputfile){
    console.log('element',inputfile,this.ragisterData.image);
    var file:File = inputfile.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      console.log('RESULT', myReader)
    //  this.ragisterData.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
