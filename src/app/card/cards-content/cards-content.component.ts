import { Component } from "@angular/core";
import {
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardTitle,
  MatCardHeader,
  MatCardSubtitle,
  MatCardImage,
} from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { NgOptimizedImage } from "@angular/common";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-cards-content",
  standalone: true,
  imports: [
    MatButton,
    MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatCardImage,
    NgOptimizedImage,
    MatIcon,
  ],
  template: `
    <mat-card-header>
      <mat-card-title> Lorem ipsum dolor sit. </mat-card-title>
      <mat-card-subtitle>Lorem, ipsum dolor.</mat-card-subtitle>
    </mat-card-header>
    <div class="image-wrapper">
      <img mat-card-image ngSrc="/assets/images/real-estate.webp" alt="Real estate" priority fill />
    </div>
    <mat-card-content>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum qui dignissimos optio itaque,
        cupiditate omnis, incidunt exercitationem quos iste aliquid id consequatur adipisci atque libero delectus non
        doloremque quod?
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-flat-button>
        <mat-icon>call</mat-icon>
        Call
      </button>
      <button mat-stroked-button>
        <mat-icon>email</mat-icon>
        Email
      </button>
    </mat-card-actions>
  `,
  styles: `
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 200px;

      img {
        object-fit: cover;
      }
    }

    mat-card-actions {
      button:first-child {
        margin-right: 0.25rem;
      }
    }
  `,
})
export class CardsContentComponent {}
