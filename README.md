# HTML for AI Engineers

A module-by-module HTML learning project, focused on the HTML skills needed
to build interfaces for AI applications (chat windows, forms, streaming
responses, browser storage).

**Live site:** https://<your-username>.github.io/html-for-ai-engineers/

## Modules

| # | Module | Topics covered | Status |
|---|--------|----------------|--------|
| 01 | [Fundamentals](module-01-fundamentals/) | Headings, paragraphs, elements, attributes, formatting, quotations, comments, phrase and code elements | Done |
| 02 | [Structure](module-02-structure/) | Page skeleton, head element, meta tags, block vs inline, div/span, classes, IDs | Done |
| 03 | [Styling Basics](module-03-styling-basics/) | Inline, internal and external CSS, fonts, color formats (name, RGB, HEX, HSL), backgrounds | Done |
| 04 | [Images & Media](module-04-images-media/) | Images, image maps, iframes, video, audio, embed, inline SVG, canvas | Done |
| 05 | [Links & Navigation](module-05-links-navigation/) | Text, image and email links | Done |
| 06 | [Tables](module-06-tables/) | Headers, captions, styling, colgroup, nesting | Done |
| 07 | [Lists](module-07-lists/) | Unordered, ordered, definition lists | Done |
| 08 | [Forms](module-08-forms/) | Form attributes, controls, input attributes | Planned |
| 09 | [Layout & Responsive](module-09-layout-responsive/) | Layout elements, CSS layout, responsiveness, symbols, emojis | Planned |
| 10 | [JavaScript Integration](module-10-javascript-integration/) | JavaScript in HTML, DOM | Planned |
| 11 | Modern HTML APIs | Geolocation, drag and drop, web workers, WebSocket, web storage, SSE, IndexedDB, CORS, WebRTC | Planned |
| 12 | Accessibility & Best Practices | Style guide, validation | Planned |

## Project structure

```
html-for-ai-engineers/
├── index.html                  # landing page linking to every module
├── README.md
├── .gitignore
├── module-01-fundamentals/
│   └── index.html
├── module-02-structure/
│   └── index.html
├── module-03-styling-basics/
│   ├── index.html
│   └── style.css
└── module-04-images-media/
    ├── index.html
    ├── images/
    │   ├── photo.jpg
    │   └── shapes.svg
    └── media/
        ├── sample.mp4
        ├── sample.mp3
        └── sample.pdf
```

## How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/html-for-ai-engineers.git
   ```
2. Open the folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click any module's `index.html` and choose **Open with Live Server**.

Alternative without an extension (run from the repo root):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Learning approach

- One folder per module, each runnable on its own
- Every module includes code, an explanation, a tags/properties reference,
  the expected result and practice exercises
- Committed after each module, so the Git history shows progress

## Author

<your name>
Embedded systems engineer (8 years) moving into AI engineering.