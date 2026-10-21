# Sanket.dev — Hi, Doctor! 💗

A small, mobile-first, animated static website. It is built with plain HTML, CSS, and JavaScript, so it can be hosted free on Vercel.

## Files
- `index.html` — page content
- `style.css` — layout, animation, and mobile styling
- `script.js` — screen navigation and button interactions

## Important privacy note
This is currently a front-end demo. It does **not** send or store her answer, Instagram handle, or phone number. The last-screen choices only display a message on the page. Do not ask for or store personal details without her consent.

## Test locally
Open `index.html` in a browser. For the best preview, test on a phone-sized viewport. Google Fonts needs an internet connection; the page otherwise works without a build step.

## Publish from a phone using GitHub + Vercel
1. Sign in to GitHub at https://github.com and create a new **public** repository named `sanket-doctor-site` (public is easiest for this static demo; the source code will be visible).
2. Open the repository, choose **Add file → Upload files**, and upload `index.html`, `style.css`, and `script.js` from this ZIP. Commit the upload.
3. Go to https://vercel.com and sign in with GitHub.
4. Choose **Add New → Project**, import `sanket-doctor-site`, and keep the framework/preset as **Other**. No build command or output directory is needed for this plain static site.
5. Tap **Deploy**. When it finishes, open the generated `vercel.app` URL on your phone and test all buttons.
6. To change anything later, upload/commit the updated file(s) to GitHub; Vercel will redeploy automatically.

## Mobile testing checklist
- Open the link in Chrome on Android and Safari on iPhone if available.
- Tap through all five screens.
- Tap “Need to think…” six times and test the revive button.
- Tap “Yes, let's do it!” and try all three final choices.
- Check the page at narrow width and with text size increased.
- Test the link in an incognito/private tab before sharing it.

## Personalise before publishing
Update the copy in `index.html` if you want. If you add your Instagram profile, use your real public profile URL and test it. Do not put private keys or secret tokens into these files.
