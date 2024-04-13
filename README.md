This is the repo for the Swarm React Native(Expo) mobile app. Swarm is a beekeeper assistant project.

Please install these tools: https://docs.expo.dev/get-started/installation/#requirements
Then run this command: `npx expo install react-dom react-native-web @expo/metro-runtime`

To run the app locally, clone this repo, cd into the repo folder and then run this command:
`npx expo start`

### Linting
Followed this guide to set up linting: https://github.com/vasilestefirta/react-native-eslint-prettier-example
If using VS Code, go to your user settings JSON(Cmd+Shift+P on VS Code in Macs, then search settings) and add: 

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

After you install the Prettier VS Code extension(https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), add the following to user settings like above:


```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```

### Project Onboarding