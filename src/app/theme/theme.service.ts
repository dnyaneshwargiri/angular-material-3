import { Injectable, effect, inject, signal } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ThemeClass } from "./types";
import { THEME_CLASSES } from "./theme-options";

const THEME_COOKIE_NAME = "theme";

@Injectable({ providedIn: "root" })
export class ThemeService {
  #cookieService = inject(CookieService);
  #themeCookie = this.#cookieService.get(THEME_COOKIE_NAME);
  #theme = signal<ThemeClass>(this.#getCurrentTheme());

  theme = this.#theme.asReadonly();

  constructor() {
    effect(() => {
      this.#saveThemeCookie();
    });
  }

  changeTheme(newTheme: ThemeClass) {
    this.#theme.set(newTheme);
  }

  #getCurrentTheme(): ThemeClass {
    return this.#validateThemeCookie(this.#themeCookie) ? this.#themeCookie : "violet-dark";
  }

  #validateThemeCookie(theme: string): theme is ThemeClass {
    return THEME_CLASSES.includes(theme as ThemeClass);
  }

  #saveThemeCookie() {
    this.#cookieService.set(THEME_COOKIE_NAME, this.#theme());
  }
}
