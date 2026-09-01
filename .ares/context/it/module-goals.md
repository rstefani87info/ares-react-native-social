# Obiettivi del modulo @ares/react-native-social

## Introduzione

`@ares/react-native-social` (work-in-progress) fornisce componenti e utilità React Native per funzionalità **social**: riconoscimento di URL/profilo/contenuti di piattaforme social e componenti UI di base per post e avatar.

La componente centrale attualmente stabile è `regexMap` in `index.js`: un insieme di espressioni regolari per identificare e validare link di canali, video, immagini e profili su piattaforme come YouTube, Instagram, Facebook, TikTok, X (Twitter), Dailymotion, Pinterest, Twitch, Vimeo.

Sono inoltre presenti componenti React Native `Avatar` e `Post` in `components/`.

## Obiettivi

- Riconoscere e classificare URL/profilo/contenuti delle principali piattaforme social.
- Fornire componenti UI riutilizzabili per rappresentare avatar e post in app React Native.
- Integrarsi con `@ares/react-native-ui` (i18n, media, routing) e con il framework aReS (`@ares/core`).

## Responsabilità

- Mantenere il dizionario `regexMap` (chiavi per tipo di contenuto, con `id` e `pattern`).
- Componente `Avatar` (immagine o iniziale in fallback al caricamento).
- Componente `Post` (titolo, contenuto, media, reazioni, recensioni, tag, template).
- Esposizione dell'entrypoint di libreria `index.js` (al momento esporta `regexMap`).

## Cosa il modulo NON fa

- Non fornisce una CLI né test reali (script `test` è un placeholder).
- Non implementa autenticazione/API delle piattaforme social: è limitato a riconoscimento URL e componenti UI.
- La documentazione e la stabilizzazione API sono ancora in corso (modulo work-in-progress).
