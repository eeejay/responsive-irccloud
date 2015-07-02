inject-responsive-stylesheet.js: inject-responsive-stylesheet.js.in responsive-irccloud.css build.py
	python build.py > inject-responsive-stylesheet.js

clean:
	rm -rf inject-responsive-stylesheet.js

install: node_modules/.bin/install-to-adb inject-responsive-stylesheet.js
	$(CURDIR)/node_modules/.bin/install-to-adb $(CURDIR)

node_modules/.bin/install-to-adb:
	npm install git+https://github.com/sole/install-to-adb.git
