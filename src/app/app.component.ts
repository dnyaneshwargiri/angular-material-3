import { Component, Renderer2, effect, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DOCUMENT } from "@angular/common";
import { ThemeService } from "./theme/theme.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  #themeService = inject(ThemeService);
  #document = inject(DOCUMENT);
  #renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      this.#renderer.setAttribute(this.#document.documentElement, "class", this.#themeService.theme());
    });
  }
}
