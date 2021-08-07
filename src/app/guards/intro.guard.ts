import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { CanLoad, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  hasSeenIntro: any;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private storage: Storage
  ) {}
  async canLoad(): Promise<boolean | UrlTree> {
    const hasSeenIntro = await this.storage.get(INTRO_KEY);
    // console.log(hasSeenIntro);
      if (hasSeenIntro) {
        return true;
      } else {
        this.router.navigateByUrl('/intro', { replaceUrl:true });
        return false;
      }
  }
}