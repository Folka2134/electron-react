# React + TypeScript + Vite

## Development notes:

### Build Scripts

To build for different operating systems run the following:
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

```
// electron-builder.json
{
  // other options...
  "icon": "./desktopIcon.png",
}
```

or update the desktopIcon.png with another png image of atleast 255px/255px within the root directory
