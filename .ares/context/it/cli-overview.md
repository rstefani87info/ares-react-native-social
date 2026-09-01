# Panoramica CLI @ares/react-native-social

## Comandi espliciti

Questo modulo **non ha una CLI** propria: `package.json` non dichiara un campo `bin` e `index.js` è un entrypoint di libreria ESM.

## Script npm disponibili

| Script | Comando | Scopo |
|---|---|---|
| `test` | `echo "Error: no test specified" && exit 1` | Placeholder: non esegue alcun test reale |

## Uso

Il modulo si usa esclusivamente via import:

```js
import { regexMap } from "@ares/react-native-social";
```

Eventuali componenti UI (`Avatar`, `Post` in `components/`) si importano dai rispettivi file. Non esistono sottocomandi o comandi binari.
