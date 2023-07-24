<div align="center">
  
  <img src="murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Election Management System</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📊Election Management System <a name="about-project"></a>

**Election Management System** is an app where polling agents can manage election results and users can view live results

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://ejs.co/">Ejs</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">Mongo DB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Polling agents can log in to the system using their credentials to access certain features**
- **Polling Agents can View all records, add new record, edit and delete the records**
- **The application tracks votes for multiple political parties in each polling unit**
- **Visitors can search for election results by entering the ID of a specific polling unit. The application retrieves and displays the results, including the total votes cast and the individual party-wise votes for that particular polling unit.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Election Management System](https://frantic-plum-blackbuck.cyclic.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Node
- NPM or Yarn
- Mongo DB account
<!--
Example command:

```sh
 gem install rails
```

-->

### Setup

Clone this repository to your desired folder:

```sh
  cd your-folder
  git clone https://github.com/ceeriil/election-management.git
```

### Install

Install this project with:

```sh
 npm install
 npm install -g nodemon
```

### Usage

To run the project, execute the following command:

```sh
  nodemon app.js
```

Then Open URL "https://localhost:3000" on a browser.

### Deployment

You can deploy the program on any hosting service supporting express js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Simon Cyril**

- GitHub: [@ceeriil](https://github.com/ceeriil)
- Twitter: [@ceeriil](https://twitter.com/ceeriil)

👤 **Emma Ochonogor**

- GitHub: [@Emmah-oo](https://github.com/Emmah-oo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Features I would love to add in the future

- [ ] **Multiple agent Login: Multiple agents should be able to login with their unique details**
- [ ] **Mobile Responsiveness**
- [ ] **Integration with Blockchain**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project feel free to message me on twitter

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **How do I set up mongo db database with the app**

  - Create a .env file in the root directory
  - Signin/up to https://www.mongodb.com/cloud/atlas/register
  - Create a cluster and connect it to the application.

  ```env
    PORT = 3000
    DATABASE ='yourdatabasestring'
    SECRET = 'YourSecretKey'
  ```

- **How do I log in as a polling agent**

  - Message me on twitter to get the login info for the polling agent database

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
