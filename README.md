# Electron Starer: React + TypeScript + Vite

## Development notes:

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
