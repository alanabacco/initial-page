import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotesService } from './notes.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from './create-note/create-note.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  notes: string[] = [];

  constructor(
    private notesService: NotesService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

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
        panelClass: 'my-dialog',
      });
    } else {
      this.showSnackbar(
        'Você atingiu o limite de notas. Apague alguma para adicionar outra.'
      );
    }
  }

  private showSnackbar(mensagem: string) {
    this._snackBar.open(mensagem, '', {
      duration: 5000,
    });
  }
}
