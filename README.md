# Resume Website (HTML/CSS/JS)

A modern, responsive **one-page resume website** built with **HTML + CSS + JavaScript**.  
Includes a clean layout, dark/light theme toggle, mobile dropdown navigation, and a simple contact form that opens your email app.

##Features
-  Modern one-page layout (Hero, About, Experience, Projects, Skills, Contact)
- **Mobile-friendly** with **dropdown menu** (no header stretching)
- **Dark / Light mode** (saved in `localStorage`)
- Active section highlight while scrolling
- Contact form uses `mailto:` (no backend needed)
- Easy to customize (edit text in `index.html`)

## Project Structure

Website Resume/
index.html
style.css
script.js
resume.pdf (optional)
README.md

##Run Locally
### Option A: Open directly
1. Download/clone this repo
2. Double-click `index.html`

### Option B (recommended): VS Code + Live Server
1. Open the folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

## Customize
Open `index.html` and replace:
- `Your Name`
- `you@email.com`
- LinkedIn / GitHub links
- Experience, projects, skills, and text

### Contact Form Email
In `script.js`, change this line to your real email:
```js
window.location.href = `mailto:you@email.com?subject=${subject}&body=${body}`;

Deploy for FREE (GitHub Pages)

Push this repo to GitHub

Go to Repository Settings → Pages

Under Build and deployment

Source: Deploy from a branch

Branch: main / root

Save

Your site will be live at:
https://YOURUSERNAME.github.io/REPOSITORY-NAME/

Check If your repo name is YOURUSERNAME.github.io, your site will be:
https://YOURUSERNAME.github.io

Optional: Add a Resume PDF

Place your resume file as resume.pdf in the root folder to enable the download link.

License

You can use and modify this project for your personal resume/portfolio.
