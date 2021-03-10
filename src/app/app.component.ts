import { Component, OnInit } from '@angular/core';
import { PexelsphotoService } from './services/pexelsphoto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  search:string;
  page:number;
  searchData: string[];
  contentType:string;

  constructor(private pexelsService : PexelsphotoService){
  }

  ngOnInit(){
    this.search = "animal";
    this.contentType = "photos";
    this.page = 1;
    this.searchphotos();
  }

  searchphotos() {
    this.pexelsService.getData(this.search,this.page).subscribe(
      (data)=>{
        this.searchData = data.photos;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  searchVideos() {
    this.pexelsService.getVideoData(this.search,this.page).subscribe(
      (data)=>{
        this.searchData = data.videos;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  typeReceived(event){
    this.contentType = event.dispType;
    if(this.contentType == "photos"){
      this.searchphotos()
    }else if(this.contentType == "videos"){
      this. searchVideos();
    }else if(this.contentType == "favs"){

    }
  }

  searchReqData(event){
    this.search = event.bannerSearch;
    this.searchphotos();
  }

}
