import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private LocalStorageKey = 'notes';
  private notes: string[] = [];

  constructor() {
    this.loadNotesFromLocalStorage();
  }

  private loadNotesFromLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      this.notes = JSON.parse(
        localStorage.getItem(this.LocalStorageKey) || '[]'
      );
    }
  }

  getNotes(): string[] {
    return this.notes;
  }

  createNote(newNote: string): void {
    const notes: string[] = this.getNotes();
    if (notes.length < 7) {
      notes.push(newNote);
      this.updateLocalStorage(notes);
    }
  }

  deleteNote(index: number): void {
    const notes = this.getNotes();
    notes.splice(index, 1);
    this.updateLocalStorage(notes);
  }

  private updateLocalStorage(notes: string[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.LocalStorageKey, JSON.stringify(notes));
    } else {
      console.error('Local storage is not available. Unable to update notes.');
    }
  }
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'testLocalStorage';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
