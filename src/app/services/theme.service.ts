import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {
  private _themeDark: Subject<boolean> = new Subject<boolean>();
  isThemeDark = this._themeDark.asObservable();

  setDarkTheme(isThemeDark: boolean) {
    this._themeDark.next(isThemeDark);
  }
}
