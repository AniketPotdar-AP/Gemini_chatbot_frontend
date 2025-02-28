import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '@shared/services/gemini.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private geminiAI = inject(GeminiService);

  newMessage: string = '';
  isLoading: boolean = false;

  messages = [
    { text: 'Hey How are you today?', isUser: false, timestamp: new Date() },
    { text: 'How can I help you?', isUser: false, timestamp: new Date() },
  ];

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    this.messages.push({
      text: this.newMessage,
      isUser: true,
      timestamp: new Date(),
    });

    this.isLoading = true;

    this.geminiAI.generateContent({ prompt: this.newMessage }).subscribe(
      (res: any) => {
        setTimeout(() => {
          this.isLoading = false;
          this.messages.push({
            text: res,
            isUser: false,
            timestamp: new Date(),
          });
        }, 1000);
      },
      (err: any) => {
        setTimeout(() => {
          this.isLoading = false;
          this.messages.push({
            text: 'Something went wrong',
            isUser: false,
            timestamp: new Date(),
          });
        }, 1000);
      }
    );

    this.newMessage = '';
  }
}
