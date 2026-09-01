# Stili di sviluppo applicati @ares/react-native-social

## Standard di programmazione

- Package **ESM** (default), entrypoint `index.js`; nessuna mappa `exports` esplicita (risoluzione ESM di default).
- Componenti React Native in `.jsx` con `PropTypes` (es. `Avatar.jsx`, `Post.jsx`).
- `index.js` esporta un dizionario di regex organizzate per piattaforma e tipo (chiave → `{id, pattern}`).
- Dipende da `@ares/core` (framework) e `@ares/react-native-ui` (i18n, SlideShow, navigation).
- Modulo open-source (LICENSE MIT) in fase di completamento: documentazione generica e test placeholder.

## Contratto directory / file

```text
react-native-social/
├── .ares/
│   ├── context/          # Contestualizzazione (manuale)
│   ├── docs/             # Documentazione (manuale)
│   └── tasks/            # Ticket/note (manuale)
├── .git/
├── components/
│   ├── Avatar.jsx        # Componente Avatar (manuale)
│   └── Post.jsx          # Componente Post (manuale)
├── index.js              # regexMap + entrypoint (manuale)
├── LICENSE               # Manuale
├── .gitignore
├── package.json          # Manuale/autogenerato da yarn
├── README.md             # Manuale
└── node_modules/         # (installato) GENERATO
```

## Distinzione GENERATO vs MANUALE

**Generato automaticamente (non versionare/rigenerare a mano):**

- `node_modules/` e lockfile di Yarn (a livello workspace).
- Eventuali artefatti di toolchain (`dist`/`build`, `coverage`, `*.tgz`) quando presenti.

**Manuale (scritto a mano, NON rigenerare/sovrascrivere):**

- `index.js`, `components/Avatar.jsx`, `components/Post.jsx`
- `LICENSE`, `README.md`, `.gitignore`, `package.json` (iniziale)
- intera sottocartella `.ares/` (docs, context, tasks)
