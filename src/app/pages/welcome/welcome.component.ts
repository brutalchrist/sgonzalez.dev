import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleMicetown = () => {
    console.log('Beware of the mice!');
    const audio = new Audio();
    audio.src = '../../assets/audio/micetown.m4a';
    audio.load();
    audio.play();
  }
}
