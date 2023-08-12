import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  constructor(
    private router: Router,
  ) {}


  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];

  openAlbum(album: any){
    const titleEscaped = encodeURIComponent(album.title);
    console.log(titleEscaped);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  dasherize(x: string){
    return x.replace(/[A-Z]/g, (char, index) => {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    })
  }
}