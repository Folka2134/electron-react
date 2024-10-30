# Electron Starter: React + TypeScript + Vite

## Configuration

Within electron-builder.json, update appId field.

```
// electron-builder.json
{
  "appId": "./desktopIcon.png",
  // other options...
}
```

Within package.json, update name, description and author fields.

```
// package.json
{
  "name": "electron-react",
  "description": "A demo electron react app",
  "author": "Folka",
  // other options...
}
```

## Development notes

### Build Scripts

To build for different operating systems run the following in the terminal

Mac

```
npm run dist:mac
```

Windows

```
npm run dist:win
```

Linux

```
npm run dist:linux
```

### App Image

To update the app icon either change the path within electron-builder.json.
Or update the desktopIcon.png within the root directory with another png image of atleast 255px/255px

```
// electron-builder.json
{
  // other options...
  "icon": "./desktopIcon.png",
}
```
