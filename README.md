This is the repo for the Swarm React Native(Expo) mobile app. Swarm is a beekeeper assistant project.

Please install these tools: https://docs.expo.dev/get-started/installation/#requirements  
Then run this command: `npx expo install react-dom react-native-web @expo/metro-runtime`

To run the app locally, clone this repo, cd into the repo folder and then run this command:
`npx expo start`

Then check the running app with any of the provided options (you may have to install additional tools for some of them)

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

After you install the Prettier VS Code extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode, add the following to user settings like above:


```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```

### Project Onboarding

    To get you familiar with the project workflow, we ask new  
    contributors to create a new branch:
    `git checkout -b <githubUsername>/new-contributor`

    You will make your first change/commit on this branch. 
    This project will follow Test Driven Development principles,  
    which means writing tests for your changes ahead of time.  
    To make it easier for newer contributors,  
    you only have to modify an existing test,  
    but you will be expected to add/write your own in future.  
    For now, first go to the Contributors.spec.tsx test file.  
    Increment the `contributors` variable by 1,  
    and run `npm test`. You should see 1 failed test.

    After this, go to the Contributors.tsx file, and add your name to the contributorsList array variable. Now when you run `npm test` again, all tests should pass. This is a simpler form of Red-Green-Refactor: https://www.codecademy.com/article/tdd-red-green-refactor. All features and code you add in the future will be expected to have adequate test coverage, or they will be turned back!

    You can then verify that your name was added properly by opening the running app and going to the Contributors tab via the bottom navigation bar. After that, open a pull request to main so an owner can approve it. Once it is approved, merge it, and you are officially part of the Swarm beekeeping project!