responsive-irccloud.js: responsive-irccloud.js.in responsive-irccloud.css build.py
	python build.py > responsive-irccloud.js

clean:
	rm -rf responsive-irccloud.js

install: node_modules/.bin/install-to-adb responsive-irccloud.js
	$(CURDIR)/node_modules/.bin/install-to-adb $(CURDIR)

node_modules/.bin/install-to-adb:
	npm install git+https://github.com/sole/install-to-adb.git
