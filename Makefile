SOURCES = $(shell git ls-tree -r master --name-only | grep -v \.gitignore | grep -v manifest\. | grep -v update\.webapp | grep -v \.js\.in)
SOURCES += inject-responsive-stylesheet.js

all: package deprecated

package: inject-responsive-stylesheet.js
	mkdir -p dist
	zip dist/new-package.zip $(SOURCES) manifest.json

inject-responsive-stylesheet.js: inject-responsive-stylesheet.js.in responsive-irccloud.css build.py
	python build.py > inject-responsive-stylesheet.js

clean:
	rm -rf inject-responsive-stylesheet.js
	rm -f dist/*.zip

# install: node_modules/.bin/install-to-adb inject-responsive-stylesheet.js
#  	$(CURDIR)/node_modules/.bin/install-to-adb $(CURDIR)

# node_modules/.bin/install-to-adb:
#	npm install git+https://github.com/sole/install-to-adb.git
