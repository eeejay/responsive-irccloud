window.addEventListener('DOMContentLoaded', function() {
  if (window.location.hostname.indexOf('irccloud') < 0) {
    // Just making sure..
    return;
  }

  var vptag = document.createElement('meta');
  vptag.name = "viewport";
  vptag.content = "width=device-width, user-scalable=no, initial-scale=1";
  document.head.appendChild(vptag);


  var maincell = document.getElementById("maincell");
  if (maincell) {
    var buffersButton = document.createElement('button');
    buffersButton.id = "bufferMenuBtn";
    buffersButton.className = 'responsive-addon';
    buffersButton.setAttribute('aria-label', 'Buffers list');
    maincell.appendChild(buffersButton);

    var membersButton = document.createElement('button');
    membersButton.id = "membersListBtn";
    membersButton.className = 'responsive-addon';
    membersButton.setAttribute('aria-label', 'Channel members');
    maincell.appendChild(membersButton);
  }

  var buffersContainer = document.getElementById("buffersContainer");
  if (buffersContainer) {
    observeInChannel(buffersContainer)
  }

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

/* A hackish thing to see if we should show the buddy button or not */
function observeInChannel(buffersContainer) {
  function toggleInChannel (buffer) {
    if (buffer.style.display && buffer.style.display !== 'none') {
      document.body.classList.toggle('inchannel', buffer.classList.contains('channel'));
    }
  }

  function observeActiveBuffer(buffer) {
    var observer = new MutationObserver(function (mutations) {
      console.log('inchannel?',
        buffer.classList.contains('channel'),
        buffer.style.display);
      toggleInChannel(buffer);
    });
    observer.observe(buffer, { attributes: true, attributeFilter: ['style'] });
  }

  // add observers for existing buffers
  for (var buffer of buffersContainer.querySelectorAll(':scope > .buffer')) {
    observeActiveBuffer(buffer);
    toggleInChannel(buffer);
  }

  // add observer to add observers :P
  var addBufferObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      for (var node of mutation.addedNodes) {
        if (node.classList.contains('buffer')) {
          observeActiveBuffer(node);
          toggleInChannel(node);
        }
      }
    });
  });

  addBufferObserver.observe(document.getElementById("buffersContainer"),
    { childList: true });
}