import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "button",
  },
  {
    path: "button",
    loadComponent: () => import("./button/button-page.component"),
  },
  {
    path: "card",
    loadComponent: () => import("./card/card-page.component"),
  },
  {
    path: "text-field",
    loadComponent: () => import("./input/input-page.component"),
  },
  {
    path: "datepicker",
    loadComponent: () => import("./date-picker/date-picker-page.component"),
  },
  {
    path: "chip",
    loadComponent: () => import("./chip/chip-page.component"),
  },
  {
    path: "table",
    loadComponent: () => import("./table/table-page.component"),
  },
  {
    path: "dialog",
    loadComponent: () => import("./dialog/dialog-page.component"),
  },
  {
    path: "menu",
    loadComponent: () => import("./menu/menu-page.component"),
  },
  {
    path: "bottom-sheet",
    loadComponent: () => import("./bottom-sheet/bottom-sheet-page.component"),
  },
  {
    path: "badge",
    loadComponent: () => import("./badge/badge-page.component"),
  },
  {
    path: "tab",
    loadComponent: () => import("./tab/tab-page.component"),
  },
  {
    path: "snackbar",
    loadComponent: () => import("./snackbar/snackbar-page.component"),
  },
  {
    path: "expansion-panel",
    loadComponent: () => import("./expansion-panel/expansion-panel-page.component"),
  },
];
