# Sanket.dev — mobile website v2

## What changed
- More character-like CSS illustrations: glasses, beard, black jacket for Sanket; long hair, earrings, sage-green saree for Doctor. These are original CSS illustrations, **not** the earlier generated 3D portrait files.
- Contact-choice form with Instagram, phone number, or “Not yet”; contact input changes based on the selected choice.
- Consent checkbox and optional note.
- A form endpoint hook so you can connect a service and receive the response.

## Important: the form is not connected yet
The form does not send anything until you set `window.FORM_ENDPOINT` in `script.js`. For the simplest no-backend setup, create a form endpoint at https://formspree.io/ and follow its instructions. Then replace the empty endpoint value near the top of `script.js` with your actual Formspree endpoint. Verify the provider's current JSON/API instructions and test with your own dummy response before sharing the site. Form providers may require a verified email or account.

Do not put private API keys, service-role keys, or database secrets in browser code. Treat submitted phone numbers as private and delete them when no longer needed. The page asks for consent before submission and lets her skip.

## Deploy from Android
1. Extract the ZIP using the Files app.
2. Upload `index.html`, `style.css`, and `script.js` to a GitHub repository.
3. Import that repo at https://vercel.com/ and deploy as a static site (preset Other; no build command/output directory).
4. After connecting the form endpoint, commit the change to GitHub; Vercel redeploys automatically.
5. Test the live URL on your phone using a dummy submission. Check the form provider's dashboard/email to confirm the test arrives.

## Custom 3D avatars
The exact prior generated avatar image files were not available to this build step. To use them faithfully, add your two image files into an `assets/` folder and replace the CSS character blocks in `index.html` with `<img>` elements. The present illustrations are placeholders until those exact image files are added.
