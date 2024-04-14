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
    To get familiar with the project workflow, we ask new contributors to create a new branch:
    `git checkout -b <githubUsername>/new-contributor`

    Then go to src/Contributors.tsx and add your name to the list:

    ```html
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
            style={styles.scrollView}>
            <Text>Melisa Im</Text>
            <Text>Monica Lam</Text>
            <Text>Linden Chiu</Text>
            <Text>YOUR_NAME</Text>

        </ScrollView>
    ```
    You should then verify that your name is added properly by opening the running app and going to the Contributors tab via the bottom navigation bar. After that, open a pull request to main so an owner can approve it. Once it is approved, merge it, and you are officially part of the Swarm beekeeping project!