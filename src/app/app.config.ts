import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "repasoexamenpwm", appId: "1:67897178842:web:8aa7778abc95cd1a0743e3", storageBucket: "repasoexamenpwm.firebasestorage.app", apiKey: "AIzaSyCN5dCAagw1Sv-MjFql_icsFq1O7yQzSh4", authDomain: "repasoexamenpwm.firebaseapp.com", messagingSenderId: "67897178842", measurementId: "G-P9YM21SYGQ" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
