lint:
	eslint --ignore-pattern *.min.js *.js

test:
	node test.js

min:
	uglifyjs file-extension.js -o file-extension.min.js --mangle --compress --screw-ie8 --unsafe --comments '/file-extension/'
	wc -c file-extension.min.js

publish:
	git push -u --tags origin master
	npm publish

update:
	ncu --packageFile package.json -ua
	rm -rf node_modules
	yarn

npm-patch:
	npm version patch

npm-minor:
	npm version minor

npm-major:
	npm version major

patch: lint test min npm-patch publish
minor: lint test min npm-minor publish
major: lint test min npm-major publish

.PHONY: lint test min publish update npm-patch npm-minor npm-major patch minor major
