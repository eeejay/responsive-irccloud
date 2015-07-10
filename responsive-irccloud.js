window.addEventListener('DOMContentLoaded', function() {
  var vptag = document.createElement('meta');
  vptag.name = "viewport";
  vptag.content = "width=device-width, user-scalable=no, initial-scale=1";
  document.head.appendChild(vptag);

  var buffersContainer = document.getElementById("buffersContainer");

  var buffersButton = document.createElement('button');
  buffersButton.id = "bufferMenuBtn";
  buffersButton.className = 'responsive-addon';
  buffersButton.setAttribute('aria-label', 'Buffers list');
  buffersContainer.appendChild(buffersButton);

  var membersButton = document.createElement('button');
  membersButton.id = "membersListBtn";
  membersButton.className = 'responsive-addon';
  membersButton.setAttribute('aria-label', 'Channel members');
  buffersContainer.appendChild(membersButton);

  document.addEventListener('click', (e) => {
    if (e.target.id == 'bufferMenuBtn') {
      document.body.classList.add('leftbar');
      document.body.classList.remove('rightbar');
      ariaHideBuffers();
    } else if (e.target.id == 'membersListBtn') {
      document.body.classList.add('rightbar');
      document.body.classList.remove('leftbar');
      ariaHideBuffers();
    } else {
      document.body.classList.remove('leftbar');
      document.body.classList.remove('rightbar');
      ariaShowBuffers();
    }
  }, false)
});

function ariaShowBuffers() {
  for (var e of document.querySelectorAll('.buffermain')) {
    e.removeAttribute('aria-hidden');
  }
}

function ariaHideBuffers() {
  for (var e of document.querySelectorAll('.buffermain')) {
    e.setAttribute('aria-hidden', true);
  }
}