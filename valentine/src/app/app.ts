import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly stage = signal<'ask' | 'yes'>('ask');
  readonly noBtnPos = signal({ top: '65%', left: '50%' });

  // Update these filenames to match your files in the public folder
  readonly photos = signal([
    {
      url: '40b9f190-b94d-4e8c-ba42-1402d1d46605.JPG',
      caption: 'The first moment... ❤️'
    },
    {
      url: '64A11A2A-B5CD-47F2-AE8E-CEB7FBB4B190.JPG',
      caption: 'My favorite memory with you'
    },
    {
      url: '209782a9-89b3-4946-adc6-1cb0dbe42ef5.JPG',
      caption: 'Forever to go, Vaidehi! 🥰'
    }
  ]);

  moveNo(event: Event) {
    event.preventDefault(); // Critical for mobile touch response
    const randomTop = Math.floor(Math.random() * 70 + 10) + '%';
    const randomLeft = Math.floor(Math.random() * 70 + 10) + '%';
    this.noBtnPos.set({ top: randomTop, left: randomLeft });
  }

  sayYes() {
    this.stage.set('yes');
  }
}
