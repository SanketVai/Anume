# Hi Doctor! — cute mobile website

## What's included
- Mobile-first, pastel website with the café illustration you uploaded.
- Story screens, interests, fries + biryani question, playful “Need to think…” reactions.
- Instagram / phone / “Not yet” choices and an optional message.
- No contact details are transmitted while `window.FORM_ENDPOINT` is empty.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or upload the folder to a static host such as Vercel.

## Before publishing the answer form
The form is deliberately not connected yet. To receive responses:
1. Create your own endpoint with a form provider such as Formspree, or set up a backend you control.
2. In `script.js`, replace `const endpoint = window.FORM_ENDPOINT || '';` with your endpoint configuration (or define `window.FORM_ENDPOINT` before `script.js`).
3. Check the provider's dashboard/email delivery settings.
4. Test with your own dummy submission first.
5. Do not put private API keys or Supabase service-role keys in frontend code.

The page clearly tells the visitor when no endpoint is configured. Sharing contact information is optional; “Not yet” is a valid choice.


## Character artwork update
This version includes separate high-quality 3D cartoon scene images for the two characters:
- `assets/sanket-wave.jpg`
- `assets/doctor-wave.jpg`
- `assets/handshake.jpg`
- `assets/cafe-chat.jpg`
- `assets/sanket-thinking.jpg`
- `assets/fries-biryani.jpg`

The images are used as individual scenes throughout the website. The answer form still needs your own form endpoint before responses can be received.
