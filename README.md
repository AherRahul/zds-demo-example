<p align="center">
 <a href="https://www.zema.global/">
  <img src="https://res.cloudinary.com/duojkrgue/image/upload/v1737614196/zema-design-system/Zema_logo_qnkj5n.svg" alt="Zema Global" width="250" />
 </a>
</p>


<div align="center">

 <p align="center">
	 
# ZEMA Design System (ZDS)  

**ZDS** is an open-source tool for building UI design with Vue.js. It provides you and your team with a well-organized set of tools, patterns, and best practices to serve as a strong foundation for application development.  
</p>
</div>

## Key Features  
- Built with **Vue.js** for robust component-based development.  
- Streamlines the design-to-development process by offering reusable components and patterns.  
- Ideal for designers and front-end developers familiar with component-based workflows, **HTML**, **SCSS**, and **JavaScript**.  

 **Made by Zema team. See also [the official website](https://zema-design-system.netlify.app/) of ZDS Design System**
 

## Features

- A set of interconnected patterns & practices for you and your team.
- A well thought-out terminology, naming conventions, and hierarchy.
- Get an automated overview of how your design system progresses over time.
- Automatic generation of living, user editable documentation.
- Easily export and use your design as an NPM dependency in another Vue.js or Nuxt.js project.
- Create a token, an element, or a pattern, and it’s immediately available across all components.
- Pre-configured Prettier setup for auto-formatting code on both save and before commit.
- Live Reloading, Autoprefixing, SCSS, and helper functions + simple and sane defaults for SVG and Webfont usage out-of-the-box.
- Documentation and the app logic are separated, so you can have public docs while the app itself stays private.
- [And more…](https://zema-design-system.netlify.app/)
 
## Documentation

- [Getting Started](https://zema-design-system.netlify.app//?path=/docs/foundation-principles--page): How to install and run Vue Design System.
- [Colors](https://zema-design-system.netlify.app//?path=/docs/foundation-cores--color-palete): Colors are important for identifying our product, in addition to helping to create consistent experiences across our solutions.
- [Typography](https://zema-design-system.netlify.app//?path=/docs/foundation-typography--tokens): ZDS's default typography is Open+Sans. We use the Open+Sans variable with OpenType resources.
- [Font Weight](https://zema-design-system.netlify.app//?path=/docs/foundation-font-weight--font-weight): Font weight is a typographic token that can be used to change the default value of the typographic scale weight and add emphasis to certain text or phrase.
- [Spacing](https://zema-design-system.netlify.app/?path=/docs/foundation-spacing--escala): Spacing tokens are an essential part of building interfaces using ZDS. 

etc.


## Examples

- [Official Documentation](https://zema-design-system.netlify.app)


## Installation

Add this package to your project:

```bash
npm i @aherrahul/zema-design-system;
```

Import the `style.css` for general styling like fonts, etc. in the root file of your application or in you root styling file.

```js
import '@aherrahul/zema-design-system/dist/style.css';
```


- To use ZDS, import the library into your entry point, it will probably be your main.js or app.js:

```js
import ZDS from "@aherrahul/zema-design-system";
```

- And install ZDS:
```js
Vue.use(ZDS);
```


## Authors

[ZEMA](https://www.zema.global/).
