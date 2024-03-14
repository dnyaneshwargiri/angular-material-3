import { Component } from "@angular/core";
import { ThemeToggleComponent } from "../theme/theme-toggle.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-navbar",
  template: `
    <nav>
      <div class="title">
        <img ngSrc="/assets/images/angular-logo.svg" alt="Angular Logo" height="26" width="26" priority />
        <span>Material 3 Demo</span>
      </div>
      <app-theme-toggle />
    </nav>
  `,
  standalone: true,
  styles: `
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        display: flex;
        align-items: center;
        gap: 0.55rem;

        span {
          font-weight: 500;
        }
      }
    }

    :host {
      width: 100%;
    }
  `,
  imports: [ThemeToggleComponent, NgOptimizedImage],
})
export class NavbarComponent {}
