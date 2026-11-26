# DEVISHA Forge

Engineering design, product development, sheet-metal solutions, electrical enclosures and manufacturing support for industrial businesses.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## cPanel Deployment

This application is built as a static site for standard cPanel hosting.

1. Run `npm install` and `npm run build` locally.
2. Upload the contents of `dist/` into cPanel's `public_html/` directory, including the hidden `.htaccess` file.
3. Point the domain or subdomain to `public_html/`.

No Node.js application or startup file is required on cPanel.
