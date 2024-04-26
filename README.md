
# Firebase CLI

## Firebase CLI Installation

``` bash
C:\Users\ruben\Desktop\op-m>firebase login
i  Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy 
(https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Yes
i  To change your data collection preference at any time, run `firebase logout` and log in again.

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=355946337&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

+  Success! Logged in as rubeneision.castroruiz9@gmail.com

```

```bash
C:\Users\ruben\Desktop\op-m>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\ruben\Desktop\op-m

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Realtime Database: Configure a security rules 
file for Realtime Database and (optionally) provision default instance

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: my-manga-one-piece (my-manga-one-piece)
i  Using project my-manga-one-piece (my-manga-one-piece)

=== Database Setup
i  database: ensuring required API firebasedatabase.googleapis.com is enabled...
!  database: missing required API firebasedatabase.googleapis.com. Enabling now...
+  database: required API firebasedatabase.googleapis.com is enabled

? It seems like you haven’t initialized Realtime Database in your project yet. Do you want to set it up? Yes
? Please choose the location for your default Realtime Database instance: europe-west1
✔ Creating your default Realtime Database instance: my-manga-one-piece-default-rtdb

Firebase Realtime Database Security Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Realtime Database Security Rules? database.rules.json
+  Database Rules for my-manga-one-piece-default-rtdb have been written to database.rules.json.
Future modifications to database.rules.json will update Realtime Database Security Rules when you run
firebase deploy.

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!


firebase deploy
```

```bash
C:\Users\ruben\Desktop\op-m>firebase deploy

=== Deploying to 'my-manga-one-piece'...

i  deploying database
i  database: checking rules syntax...   
+  database: rules syntax for database my-manga-one-piece-default-rtdb is valid
i  database: releasing rules...
+  database: rules for database my-manga-one-piece-default-rtdb released successfully

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/my-manga-one-piece/overview

```

[https://my-manga-one-piece.web.app/](https://my-manga-one-piece.web.app/)
