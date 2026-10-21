# sanket.dev — Formspree configured

Form endpoint configured in the website:
https://formspree.io/f/moejgpkd

## Deploy
1. Extract the ZIP.
2. Upload the entire project folder to GitHub. Keep `index.html`, `style.css`, `script.js`, and `assets/` together.
3. Import the repository into Vercel as a static site (no build command required).
4. In Formspree, confirm the form is active and complete any email verification required by your account.
5. Test the deployed website with a dummy response, then check your Formspree submissions dashboard and notification email.

## Form behavior
- Captures the selected option (Instagram / Phone number / Not yet), optional contact detail, optional message, and consent status.
- Contact details are only sent when the visitor chooses to share them.
- The page reports success only when Formspree returns a successful HTTP response.
- If Formspree rejects the submission, the page displays an error instead of claiming the answer was saved.

The endpoint is now inserted into `script.js`. I cannot verify your private Formspree account or submit a real test response from here, so please test once after deployment.
