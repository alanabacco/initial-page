import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from '../notes.service';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss',
})
export class CreateNoteComponent {
  newNote = '';

  constructor(private notesService: NotesService) {}

  createNote(): void {
    if (this.newNote.trim() !== '') {
      this.notesService.createNote(this.newNote);
      this.newNote = '';
      // this.router.navigate(['/']);
    }
  }
}
