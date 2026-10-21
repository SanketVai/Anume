const scenes=[...document.querySelectorAll('.scene')];
function showScene(id){scenes.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showScene(b.dataset.next)));
document.querySelectorAll('[data-prev]').forEach(b=>b.addEventListener('click',()=>showScene(b.dataset.prev)));
const reactions=[
'Still thinking? 🥺 I thought fries were a convincing argument. 🍟',
'Are you sure? 👀 I was already mentally ordering biryani… 😂',
'Hmm… should I prepare a presentation to convince you? 😎',
'Take your time… but the fries might not wait forever. 🍟😂',
'Five times?! 😳 I’m getting nervous now… last chance? 🥺💗'
];
let thinkCount=0;const thinkButton=document.getElementById('think-button');const reaction=document.getElementById('reaction');
thinkButton.addEventListener('click',()=>{
 if(thinkButton.dataset.revive==='true'){thinkCount=0;thinkButton.dataset.revive='false';thinkButton.textContent='Give me a moment… 🤔';reaction.textContent='I’m back! 😅 Your turn, Doctor.';return;}
 thinkCount++;
 if(thinkCount>=5){reaction.textContent='That’s it… 💔 *dramatically faints* 😵‍💫';thinkButton.textContent='Revive me please! 🥹';thinkButton.dataset.revive='true';}
 else reaction.textContent=reactions[thinkCount-1];
});
document.getElementById('yes-button').addEventListener('click',()=>showScene('scene-contact'));
const contactInput=document.getElementById('contact');
function updateContactField(){const val=document.querySelector('input[name="contactType"]:checked').value;contactInput.disabled=val==='Not yet';contactInput.value='';contactInput.type=val==='Phone number'?'tel':'text';contactInput.placeholder=val==='Instagram'?'Your Instagram ID (e.g. @yourname)':val==='Phone number'?'Your phone number (optional)':'No contact needed 💗';}
document.querySelectorAll('input[name="contactType"]').forEach(el=>el.addEventListener('change',updateContactField));updateContactField();
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  const choice = document.querySelector('input[name="contactType"]:checked').value;
  const consent = document.getElementById('consent').checked;

  if (choice !== 'Not yet' && !consent) {
    status.textContent = 'Please tick the consent box if you want to share your contact details.';
    return;
  }

  const endpoint = 'https://formspree.io/f/moejgpkd';
  const payload = {
    'Contact choice': choice,
    'Contact detail': choice === 'Not yet' ? '' : contactInput.value.trim(),
    'Message': document.getElementById('message').value.trim(),
    'Consent': consent ? 'Yes' : 'No',
    '_subject': 'New answer from the sanket.dev website'
  };

  status.textContent = 'Sending your answer…';
  const submitButton = e.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      status.textContent = 'Thank you for answering 💗 Your response has been sent!';
      e.target.reset();
      updateContactField();
    } else {
      let details = '';
      try { details = (await response.json()).errors?.map(x => x.message).join(' ') || ''; } catch {}
      status.textContent = details || 'Could not send yet. Check that your Formspree form is activated, then try again.';
    }
  } catch {
    status.textContent = 'Could not connect right now. Please check your connection and try again.';
  } finally {
    submitButton.disabled = false;
  }
});