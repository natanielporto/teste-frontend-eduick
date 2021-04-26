# EDUICK Front-end test.

## Candidate: Nataniel Porto
-----------------------
First, download the repo via terminal, just copy and paste this next line:
```
git clone https://github.com/natanielporto/teste-frontend-eduick
```


Then, you must have Yarn installed in order to install all the dependencies.
A guide to install Yarn can be found here:
```
https://classic.yarnpkg.com/en/docs/install/#debian-stable
```

Now that you have the repo and Yarn, go to the root folder of the project and type:
```
yarn
```

Wait for it to download and install all the files.

After all of it, if everything went well, just type.
```
yarn start
```

This project was created with: 
Node v15.14.0, ReactJS, Typescript, Styled Components, React Router, ESLint configured to follow Airbnb standards of code, Prettier and Cypress for testing.
In order for it to run smooth, it's advised that you install ESLint and Prettier, both extensions of the VSCode IDE.

The project will start at port 3000.

---
Testing:

These pages are tested both in desktop mode and one in mobile mode - because the tests tend to be same-ish. 

Since I don't know which one is your operating system, in order for you to run the Cypress tests I suggest looking [here](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

That's Cypress documentation. In my case, since I use Linux, I had to run:
```
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```
After that, you can run the tests by typing in the root terminal of the project:
```
yarn run cypress open
```
A browser should open and you can select one of three sets to test the code.

```Cheers and thank you.```