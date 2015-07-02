window.addEventListener('DOMContentLoaded', function() {
  var vptag = document.createElement('meta');
  vptag.name = "viewport";
  vptag.content = "width=device-width, user-scalable=no, initial-scale=1";
  document.head.appendChild(vptag);

  var buffersButton = document.createElement('button');
  buffersButton.id = "bufferMenuBtn";
  buffersButton.className = 'responsive-addon';
  buffersButton.textContent = "\u2630";
  buffersButton.setAttribute('aria-label', 'Buffers list');
  document.body.appendChild(buffersButton);

  var membersButton = document.createElement('button');
  membersButton.id = "membersListBtn";
  membersButton.className = 'responsive-addon';
  membersButton.textContent = "\uD83D\uDC64";
  membersButton.setAttribute('aria-label', 'Channel members');
  document.body.appendChild(membersButton);

  document.addEventListener('click', (e) => {
    if (e.target.id == 'bufferMenuBtn') {
      document.body.classList.add('leftbar');
      document.body.classList.remove('rightbar');
    } else if (e.target.id == 'membersListBtn') {
      document.body.classList.add('rightbar');
      document.body.classList.remove('leftbar');
    } else {
      document.body.classList.remove('leftbar');
      document.body.classList.remove('rightbar');
    }
  }, false)
});
