import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from '../notes.service';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from '../notes.component';

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
    MatDialogClose,
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss',
})
export class CreateNoteComponent {
  newNote = '';

  constructor(
    private notesService: NotesService,
    public dialog: MatDialogRef<NotesComponent>
  ) {}

  createNote(): void {
    if (this.newNote.trim() !== '') {
      this.notesService.createNote(this.newNote);
      this.newNote = '';
      this.dialog.close();
    }
  }
}
