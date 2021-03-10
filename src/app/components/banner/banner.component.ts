import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PexelsphotoService } from '../../services/pexelsphoto.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  bannerSearch:string ='';
  bannerPhoto:string;


  @Output() inputSearch = new EventEmitter<{bannerSearch:string}>();
  searchData(){
    this.inputSearch.emit({bannerSearch:this.bannerSearch})
  }

  constructor(private pexelsService : PexelsphotoService) { }

  ngOnInit(): void {
      this.pexelsService.getCuratedPhoto().subscribe(
        (data)=>{
          this.bannerPhoto = data.photos[0].src.landscape;
        },
        (error)=>{
          console.log(error)
        }
      )
    

  }

}
