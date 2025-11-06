import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Modal Title'; 
  @Input() message: string = 'This is a modal message.'; 
  @Output() closeModal = new EventEmitter<void>(); 

  close() {
    this.closeModal.emit();
  }
}
