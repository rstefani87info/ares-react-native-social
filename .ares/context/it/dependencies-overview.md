# Dipendenze @ares/react-native-social

## Dipendenze aReS (@ares/*) dichiarate

### `@ares/core` (di runtime)
Framework base aReS: il modulo si appoggia alle utilità del core per l'integrazione runtime (config, utilità di base) nelle app React Native.

### `@ares/react-native-ui` (di runtime)
Usato dai componenti social: per esempio `Post.jsx` importa `i18n` da `@ares/react-native-ui/locales/i18n` e `SlideShow` da `@ares/react-native-ui/components/output/media/SlideShow`; `useNavigation` da `@react-navigation/native`.

### `@ares/scd` (devDependency)
Toolchain di sviluppo aReS (dev-only).

Dipendenza esterna notevole: **`moment`** e **`@react-navigation/native`** (usati in `Post.jsx`).

## Chi dipende da questo modulo

Dall'analisi delle `package.json` del workspace, **nessun altro modulo `@ares/*` dichiara oggi una dipendenza** da `@ares/react-native-social`: è destinato alle app React Native consumer, non consumato internamente da altri moduli aReS al momento.
