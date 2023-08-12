import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const title= this.activatedRoute.snapshot.paramMap.get('title');
    
    if(title !== null){
      const decodedTitle = decodeURIComponent(title);
      console.log(decodedTitle);
    }
  }

}
