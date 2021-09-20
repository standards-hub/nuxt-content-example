# [Nuxt Content Example](https://nuxt-content-example.surge.sh/)
> A quick and easy example of the new Nuxt Content and Components library

![Made with Nuxt](https://img.shields.io/badge/Made%20With-Nuxt-008c78?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![GitHub](https://img.shields.io/github/license/ninest/nuxt-content-example?style=flat-square)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?style=flat-square)](https://www.buymeacoffee.com/ninest)


**Relevant documentation:**
- [Nuxt components](https://github.com/nuxt/components)
- [Nuxt content](http://content.nuxtjs.org/)

## 🚀 Features
- [x] Using Nuxt content
- [x] Using Nuxt components
- [x] Index and about pages
- [x] Posts page, which lists out posts
- [x] Separate page for each post
- [x] Custom components for page layouts
- [x] Style with normalize.css and custom styles
- [x] SEO with meta tags
- [ ] Include components in markdown

## 🛠 Build setup
Clone or fork this repository then download it, then run this command to start the development server:

```bash
npm run dev
```

Make changes in components and markdown files and see them reflected live in your website.

To generate a full static site, run

```bash
npm run generate
```

This will generate the static site in the `dist/` directory

### Pages
Any markdown file in the `content/` folder directory will create a new page. For example, try creating the page `privacy-policy.md` with the following content:

```markdown
---
title: Privacy policy
description: How our services value your privacy
---

This is the privacy policy for my company.
```

Save the file, and head over to [localhost:3000/privacy-policy](http://localhost:3000/privacy-policy) to view the page.

This page is being generated by `pages/_slug.vue`:
```vue
<template>
  <Default :title="doc.title">
    <!-- rendering markdown-->
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  ...,
  async asyncData({$content, params}) {
    // getting document based on URL
    // if you're on localhost:300/abc, params.slug is "abc"
    const doc = await $content(params.slug).fetch();
    return { doc }
  }
}
</script>
```

### Hosting
Statically generate the site by running

```bash
npm run generate
```

This will create a `dist/` folder with the site. I decided to host the site using [Surge.sh](surge.sh). Install surge with 

```bash
npm install --global surge
```

(Mac users may have to run `sudo npm install --global surge`)


To host the `dist/` folder, run


```bash
surge dist
```
