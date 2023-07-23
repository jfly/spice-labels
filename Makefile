.bootstrapped: package.json package-lock.json
	npm install
	touch .bootstrapped

.PHONY: check
check: .bootstrapped
	npm run lint

.PHONY: run
run: .bootstrapped
	npm run start

.PHONY: fix
fix: .bootstrapped
	npm run fix
