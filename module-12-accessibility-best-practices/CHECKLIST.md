# HTML Quality Checklist

## Document
- [ ] `<!DOCTYPE html>`, `<html lang="...">`, `<meta charset="UTF-8">`, viewport meta tag
- [ ] A unique, descriptive `<title>` on every page
- [ ] One `<h1>` per page, headings in order (h1, h2, h3, no skipped levels)
- [ ] Landmarks used: header, nav, main, footer (and section/aside where needed)

## Content
- [ ] Every `<img>` has `alt` (use `alt=""` for purely decorative images)
- [ ] Link text makes sense on its own (not "click here")
- [ ] Tables have `<caption>`, `<th>` with `scope`
- [ ] Lists use `<ul>`, `<ol>`, `<dl>`, not line breaks

## Forms
- [ ] Every input has a visible `<label for>`
- [ ] Errors are described in text, linked with `aria-describedby`, and focus moves to the problem
- [ ] Correct `type` and `autocomplete` values

## Keyboard and visuals
- [ ] Everything works with Tab, Shift+Tab, Enter, Space and Esc
- [ ] A visible focus indicator (never `outline: none` without a replacement)
- [ ] Text contrast at least 4.5:1 (3:1 for large text)
- [ ] Information is not conveyed by color alone
- [ ] Page works zoomed to 200% and on a phone width

## Code quality
- [ ] Passes the W3C validator with no errors
- [ ] No duplicate IDs, no unclosed tags, no obsolete tags
- [ ] CSS and JS in separate files, no inline styles or `onclick` attributes
- [ ] Lighthouse accessibility score of 90 or higher