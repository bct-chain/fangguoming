<p align="center" width="100%">
    <img height="100" src="https://github.com/bct-chain/developer-portfolio/assets/77630868/c0064908-cd5f-4751-a77c-eba90a62b55c">
</p>

---
# Developer Portfolio - Guoming Fang

---

# Portfolio Website

### A modern, responsive portfolio website built with Next.js, featuring a space-themed design with bilingual support (English/Chinese). This portfolio showcases my work as a Full Stack and Blockchain Developer, including projects, skills, experience, and blog posts.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://guomingfang.vercel.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- **HERO SECTION** - Introduction with name, designation, and call-to-action buttons
- **ABOUT ME** - Personal description and profile image
- **EXPERIENCE** - Work experience timeline
- **SKILLS** - Technical skills showcase with animated marquee
- **PROJECTS** - Featured projects with detailed cards
- **EDUCATION** - Educational background
- **BLOG** - Latest blog posts from Dev.to
- **CONTACTS** - Contact form and social links
- **FOOTER** - Social media links and navigation

## Features

- 🌐 **Bilingual Support** - Switch between English and Chinese
- 🎨 **Space-themed Design** - Modern purple/cyan color scheme
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Built with Next.js 14
- 🔄 **Dynamic Content** - Blog posts fetched from Dev.to API

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/bct-chain/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/bct-chain/developer-portfolio/tree/main/utils/data).

Example configuration:

```javascript
export const personalData = {
  name: {
    en: "Guoming Fang",
    zh: "方国明"
  },
  profile: "/image/guoming fang.png",
  designation: {
    en: "Full Stack and Blockchain Developer",
    zh: "全栈和区块链开发者"
  },
  description: {
    en: "I'm Guoming Fang, a Full Stack and Blockchain Frontend Developer with extensive experience in building and delivering innovative decentralized applications...",
    zh: "我是方国明，一名全栈和区块链前端开发者..."
  },
  email: "guomingfang815@gmail.com",
  phone: "+818084710263",
  address: "3 Lor Sarina, Singapore 416649",
  github: "https://github.com/bct-chain",
  stackOverflow: "https://stackoverflow.com/users/31108354/guoming-fang",
  telegram: "https://t.me/fangguoming",
  discord: "moddy650",
  devUsername: "fangguoming",
  resume: "https://drive.google.com/file/d/1Wy-TpD8rUZiaZvsa3qtOWkAnmqXYxlte/view?usp=sharing",
  cake: "https://www.cake.me/fangguoming?locale=en",
  forem: "https://forem.com/fangguoming"
};
```

**Note:** 
- `devUsername` is used for fetching blog posts from `dev.to`
- The portfolio supports bilingual content (English/Chinese) - update both `en` and `zh` fields for name, designation, and description

---

---

# Packages Used :package:

| Package | Purpose |
| :------ | :------ |
| next | React framework for production |
| @emailjs/browser | Email service integration |
| lottie-react | Animated illustrations |
| react-fast-marquee | Scrolling animations for skills |
| react-icons | Icon library |
| react-toastify | Toast notifications |
| sass | CSS preprocessor |
| tailwindcss | Utility-first CSS framework |
| react-google-recaptcha | reCAPTCHA integration |
| swiper | Touch slider for projects |

---

# Contact :email:

- **Email:** guomingfang815@gmail.com
- **GitHub:** [@bct-chain](https://github.com/bct-chain)
- **Stack Overflow:** [guoming-fang](https://stackoverflow.com/users/31108354/guoming-fang)
- **Telegram:** [@fangguoming](https://t.me/fangguoming)
- **Dev.to:** [@fangguoming](https://dev.to/fangguoming)
- **Cake.me:** [fangguoming](https://www.cake.me/fangguoming?locale=en)
- **Forem:** [fangguoming](https://forem.com/fangguoming)

---

# License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Guoming Fang (方国明)**
