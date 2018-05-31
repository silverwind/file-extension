BIN:=node_modules/.bin
VERSION:=$(shell jq -r .version < package.json)

lint:
	$(BIN)/eslint --ignore-pattern *.min.js .

test:
	$(MAKE) lint
	node test.js

min:
	$(BIN)/uglifyjs file-extension.js -o file-extension.min.js --mangle --compress--unsafe --comments '/file-extension/' && wc -c file-extension.js
	cat README.md | sed -E "s/[0-9]+ bytes/$$($(BIN)/gzip-size --raw file-extension.min.js) bytes/" > README.md
	git diff --exit-code &>/dev/null || git commit -am "rebuild"

publish:
	git push -u --tags origin master
	npm publish

update:
	$(BIN)/updates -u
	rm -rf node_modules
	yarn

patch:
	$(MAKE) lint
	cat file-extension.min.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i patch $(VERSION))/" > file-extension.min.js
	cat file-extension.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i patch $(VERSION))/" > file-extension.js
	git diff --exit-code &>/dev/null || git commit -am "bump version"
	$(MAKE) min
	npm version patch
	$(MAKE) publish

minor:
	$(MAKE) lint
	cat file-extension.min.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i minor $(VERSION))/" > file-extension.min.js
	cat file-extension.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i minor $(VERSION))/" > file-extension.js
	git diff --exit-code &>/dev/null || git commit -am "bump version"
	$(MAKE) min
	npm version minor
	$(MAKE) publish

major:
	$(MAKE) lint
	cat file-extension.min.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i major $(VERSION))/" > file-extension.min.js
	cat file-extension.js | sed -E "s/v[0-9\.]+/v$$($(BIN)/semver -i major $(VERSION))/" > file-extension.js
	git diff --exit-code &>/dev/null || git commit -am "bump version"
	$(MAKE) min
	npm version major
	$(MAKE) publish

.PHONY: lint test min publish update patch minor major
