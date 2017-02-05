import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent  {
  constructor()  {
  }

  public play(event: MouseEvent) {
    // var audio = new Audio('./Songs/Samples/1.mp3');
    // audio.play();
  }
}
