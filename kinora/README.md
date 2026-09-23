# Kinora

Kinora is a trilingual family cybersecurity learning platform co-authored by Shary Llanos Antonio and created as a Tech by Shar platform.

**Status: work in progress.** The current practice area contains three short, single-decision scenarios with immediate feedback. Deeper, branching simulations are in development. The website labels this as an early preview in all three language views.

It helps parents, children, and teenagers build safer digital habits through practical tips, interactive scenarios, and approachable guidance.

## Included languages

- English
- Colombian Spanish
- San Andrés and Providencia Kriol

The Kriol content is a respectful first draft. A Raizal language expert should review it before a formal public launch.

## Features

- Quick cybersecurity tips for families
- Interactive decision simulations with immediate feedback
- A practical blog article about video game safety
- Guidance about privacy, online chats, scams, purchases, and reporting
- An interactive four-point family digital safety promise
- Responsive design for computers, tablets, and phones
- Official Tech by Shar branding

## Project structure

```text
Kinora_GitHub/
├── index.html
├── README.md
└── assets/
    └── techbyshar-logo.png
```

The project is a static website. It does not require a build process or external dependencies.

## Preview locally

You can open `index.html` directly in a browser.

For a local web server, run one of these commands from the project folder:

```bash
python -m http.server 8000
```

or:

```bash
npx serve .
```

Then open the local address shown in the terminal.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `README.md`, and the `assets` folder to the root of the repository.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder.
7. Save the settings.

GitHub will provide the public website address after deployment finishes.

## Brand and authorship

**Co-authored by Shary Llanos Antonio**  
**A Tech by Shar platform**

The Tech by Shar logo and brand assets remain the property of Tech by Shar. Do not replace, recolor, distort, or redistribute the logo separately without permission.

## Educational notice

Kinora provides general cybersecurity education. It does not replace legal advice, emergency services, or platform-specific safety guidance. Security and parental control features may change over time.

## Copyright

Copyright © 2026 Tech by Shar. All rights reserved.
