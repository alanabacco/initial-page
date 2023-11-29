import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotesService } from './notes.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from './create-note/create-note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  notes: string[] = [];

  constructor(private notesService: NotesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  deleteNote(index: number): void {
    this.notesService.deleteNote(index);
    this.notes = this.notesService.getNotes();
  }

  openDialog() {
    if (this.notes.length < 7) {
      this.dialog.open(CreateNoteComponent, {
        width: '70%',
      });
    }
  }
}
