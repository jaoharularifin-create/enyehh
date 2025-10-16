const openBtn = document.getElementById('openBtn');
const cover = document.getElementById('cover');
const invitation = document.getElementById('invitation');

openBtn.addEventListener('click', () => {
  cover.classList.add('hidden');
  invitation.classList.remove('hidden');
});