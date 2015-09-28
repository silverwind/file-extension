
lint:
	eslint --color --quiet --ignore-pattern *.min.js .

min:
	uglifyjs file-extension.js -o file-extension.min.js --mangle --compress --screw-ie8 --unsafe --comments '/file-extension/'
	wc -c file-extension.min.js

publish:
	npm publish
	git push --follow-tags

patch:
	$(MAKE) lint
	$(MAKE) min
	npm version patch
	$(MAKE) publish

minor:
	$(MAKE) lint
	$(MAKE) min
	npm version minor
	$(MAKE) publish

major:
	$(MAKE) lint
	$(MAKE) min
	npm version major
	$(MAKE) publish

.PHONY: lint min publish patch minor major
