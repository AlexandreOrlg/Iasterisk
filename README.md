<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AlexandreOrlg/Iasterisk">
    <img src="https://github.com/AlexandreOrlg/Iasterisk/blob/master/resources/icon.png?raw=true" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Iasterisk</h3>

  <p align="center">
Introducing another AI-powered spelling corrector <br>
    <a href="https://github.com/AlexandreOrlg/Iasterisk/blob/master/d%C3%A9mo.gif">View Demo</a>

  </p>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project
Iasterisk is the first corrector designed for those who wish to be discreet when they correct their text, powered by OpenAI's GPT.<br>
Its operation is very simple: it takes the text from your clipboard, corrects it, and replaces your clipboard with the corrected text. In this way, you are the only one who knows that you have corrected your text!

Here's why:
* 🌐 Designed with those self-conscious about their writing in mind.
* 🎯 Ability to use custom prompts for more precise corrections or different tones.
* 💡 Based on GPT-3.5, therefore corrects 99% of mistakes.
* 🌍 Works for all languages around the world.
* 🇫🇷🇬🇧 The application is available in French and English.
* ⚡️ Supports keyboard shortcuts for faster operations.


Démo gif (The gif is heavy, it may take time to load) :
[![Product Name Screen Shot][product-screenshot]](https://example.com)




### Built With

[![Electron][Electron.org]][Electron-url]
[![Svelte][Svelte.dev]][Svelte-url]
[![Svelte][openAI.com]][OpenAi-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Get an API Key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

4. Launch dev mode
   ```sh
   npm run dev
   ```

5. Define the API key in the app

6. Add your prompt, here's an example of how to correct the text:
   ```
   You are an assistant that revises a user's document to correct it. Make sure to:
   - Fix spelling and grammar
   - Avoid replacing words
   - Avoid changing words
   - If the text contains quotes, repeat the text inside the quotes exactly as it is
   - Do not change the meaning of the text
   - Preserve all emojis
   - Avoid using overly formal language```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
## Roadmap

- [x] Add custom prompts
- [x] Define keyboard shortcuts for prompts
- [x] Multi-language Support
  - [x] French
  - [x] English
- [ ] Regenerate response
- [ ] History


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Alexandre Orliaguet - [@alexandre_orliaguet](https://linkedin.com/in/alexandre-orliaguet)


<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alexandre-orliaguet
[product-screenshot]: https://github.com/AlexandreOrlg/Iasterisk/blob/master/d%C3%A9mo.gif?raw=true

[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Electron.org]: https://img.shields.io/badge/Electron-4A4A55?style=for-the-badge&logo=electron&logoColor=white
[Electron-url]: htpps://electron.org
[Openai.com]: https://img.shields.io/badge/OpenAI-4A4A55?style=for-the-badge&logo=openai
[Openai-url]: https://openai.com

