import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import albums from '../../assets/mockdata/albums/albums.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const title= this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title!);

    const album = albums.data.find((album) => album.title === decodedTitle);

    if(album) {
      this.data = album;
      console.log(album);
    }
  }

  dasherize(x: string){
    return x.replace(/[A-Z]/g, (char, index) => {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    })
  }
}
