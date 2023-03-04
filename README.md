<div align="center">
  <h2 align="center">Pomodoro Timer</h2>

  <p align="center">
    This is a Pomodoro Timer built using React.js and Typescript. It is a productivity tool that helps users break down their work into intervals of 25 minutes, known as pomodoros, separated by short breaks. The app has a user-friendly interface and allows users to customize the duration of their pomodoros and breaks.
    <br />
</div>

<br />

<!-- TABLE OF CONTENTS -->
## Table of contents
<ol>
    <li>
        <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#built-with">Built with</a>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
    </li>
    <li>
        <a href="#usage">Usage</a>
    </li>
    <li>
        <a href="#contributing">Contributing</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
</ol>

<br />

<!-- ABOUT THE PROJECT -->
## About The Project

### Initial screen
The initial screen has a timer, where it is necessary to inform the name of the task and the time it will work on, with a minimum of 5 minutes and a maximum of 60.
![Home screenshot][home-screenshot]

<br />
<hr />
<br />

### History screen
There is a second screen, where the history of the last timers is located, showing the name of the task, duration, start and status.
![History screenshot][history-screenshot]

<br />

## Built with

<br />

[![React][React.js]][React-url]
[![Typescript][Typescript]][Typescript]
[![Vite][Vite]][Vite]

<br />

<!-- GETTING STARTED -->
## Getting Started

To install the Pomodoro Timer, follow these steps:

1. Clone the repo:
   ```sh
   git clone https://github.com/eidynho/pomodoro.git
   ```
2. Install the dependencies:
   ```sh
   cd pomodoro
   npm install
   ```
3. Start the app:
   ```sh
   npm run dev
   ```
4. Open http://localhost:3001 to view it in the browser.

<br />

<!-- USAGE EXAMPLES -->
## Usage

To use the Pomodoro Timer App, follow these steps:

1. Set the name and duration of your pomodoro using the input fields.
2. Click the "Start" button to start the timer.
3. The remaining time will be displayed on the timer.
4. When the timer completes a pomodoro or break, timer will interrupt automatically.
5. If you want to stop, click on "Interrupt" button to break.

<br />

<!-- CONTRIBUTING -->
## Contributing

If you would like to contribute to the development of the Pomodoro Timer App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Push your branch to your forked repository.
5. Create a pull request from your branch to the original repository.

<br />

<!-- LICENSE -->
## License

This project is licensed under the MIT License. See `LICENSE.txt` for more information.

<br />

<!-- MARKDOWN LINKS & IMAGES -->
[home-screenshot]: src/assets/home.png
[history-screenshot]: src/assets/history.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
