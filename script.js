const screens = [...document.querySelectorAll('.screen')];
const progress = document.getElementById('progress');
let thinkCount = 0;

function showScreen(id) {
  screens.forEach((screen, index) => {
    const active = screen.id === id;
    screen.classList.toggle('active', active);
    screen.setAttribute('aria-hidden', String(!active));
    if (active) progress.textContent = `${String(index + 1).padStart(2, '0')} / ${String(screens.length).padStart(2, '0')}`;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-next]').forEach(button => {
  button.addEventListener('click', () => showScreen(button.dataset.next));
});

const reactions = [
  'Why the thinking face? 🥺 Did the fries not excite you? 🍟💕',
  'Are you sure? 👀 I was already mentally ordering biryani… 😂',
  'Hmm… still thinking? 🤔 Should I improve my presentation? 😎',
  'Okay okay, take your time… ⏳ But fries get cold, you know? 🍟😂',
  'Five times?! 😳 You’re making me nervous now… 💗 Last chance? 🥺'
];
const thinkBtn = document.getElementById('thinkBtn');
const reaction = document.getElementById('reaction');
const dramaticScene = document.getElementById('dramaticScene');

thinkBtn.addEventListener('click', () => {
  thinkCount += 1;
  if (thinkCount < 6) {
    reaction.hidden = false;
    reaction.textContent = reactions[thinkCount - 1];
    thinkBtn.textContent = `Still thinking… (${thinkCount}/6) 🤔`;
    if (thinkCount === 5) thinkBtn.textContent = 'One more click… 😳';
  } else {
    reaction.hidden = true;
    dramaticScene.hidden = false;
    thinkBtn.hidden = true;
  }
});

document.getElementById('reviveBtn').addEventListener('click', () => {
  thinkCount = 0;
  dramaticScene.hidden = true;
  thinkBtn.hidden = false;
  thinkBtn.textContent = 'Need to think… 🤔';
  reaction.hidden = false;
  reaction.textContent = 'He has been revived. 🩹 The biryani plan is back on the table… maybe? 😌';
});

document.getElementById('yesBtn').addEventListener('click', () => showScreen('connect'));

const sharePanel = document.getElementById('sharePanel');
const shareMessage = document.getElementById('shareMessage');
function showShareMessage(message) {
  sharePanel.hidden = false;
  shareMessage.textContent = message;
}
document.getElementById('instaBtn').addEventListener('click', () => {
  showShareMessage('Instagram sounds good! 📸 You can ask Sanket for his handle—or share yours only if you feel comfortable. 💗');
});
document.getElementById('phoneBtn').addEventListener('click', () => {
  showShareMessage('Phone number it is, if you feel comfortable! 📞 You can share it directly with Sanket. This page does not collect or send your number.');
});
document.getElementById('laterBtn').addEventListener('click', () => {
  showShareMessage('Of course. 😊 No rush, no pressure. Thanks for checking out my little website, Doctor. Hope it made you smile. 🌷');
});
