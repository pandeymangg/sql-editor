# SQL Editor- Atlan Assignment

**Task :** Create a SQL editor view where your users can query easily on a table using SQL, and see the results.

The app is deployed at : **https://sql-editor-chi.vercel.app/**

## Features:

- SQL Editor with syntax highlighting and light / dark themes. Queries can be run and the editor can be cleared as well.
- Light and dark themes in the app, theme is persisted on page reloads.
- Tables can be exported to csv files.
- History bar having a list of predefined queries, clicking on a query pastes it in the editor.

## Technologies Used:

1. Next.js
2. Tailwindcss

## Performance

- Using next.js for code splitting and pre rendering pages for increased performance.
- Lazy loading components like the editor and the table using next.js dynamic imports.
- Using tailwindcss for purging all the unused css in production for better performance.

The app is pretty performant with **Time to Interactive** sitting at just **0.7s** and the **First Contentful Paint (FCP)** is just **0.3s**. This performance gain is achieved by the measures taken above. I have used lighthouse tool for calculating these times.

The lighthouse performance score is as shown below:

![Lighthouse performance score](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/lh-perf.png)

![Lighthouse main score](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/lh-main.png)

## User Interface

- I have tried to keep the UI very clean and simple for better user experience.
- Implemented light and dark themes in the app using tailwindcss.
- The app is fully responsive, the sidebar is converted into a sliding up-down menu on mobile devices!

## Screenshots

![desktop light](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/light-desktop.png)

![desktop dark](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/dark-desktop.png)

![phone menu closed](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/phone-1.png)

![phone menu open](https://raw.githubusercontent.com/anshuman9999/sql-editor/main/public/screenshots/phone-2.png)
