.PHONY: build

###################################
## Variables for Makefile
###################################
APP_NAME=$(npm list --depth=0 | head -n 1 | awk -F@ '{print $1}')
TAG=latest

# Colors
## The ;01m makes the font bold
NO_COLOR=\x1b[0m
BLUE=\x1b[0m
BLACK=\x1b[30;01m
RED=\x1b[31;01m
GREEN=\x1b[32;01m
YELLOW=\x1b[33;01m
BLUE=\x1b[34;01m
MAGENTA=\x1b[35;01m
CYAN=\x1b[36;01m
WHITE=\x1b[37;01m

###################################
## Commands
###################################
build: ## builds the project
	npm run build

pipeline: init build test ## representative of a CI pipeline

help: ## Show this help message.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "$(CYAN)%-30s$(NO_COLOR) %s\n", $$1, $$2}'

init: ## initializes the project
	npm i

start: ## run locally
	@rm -rf dist
	@npm start

clean: ## remove all caches, node_modules, etc
	@rm -rf node_modules
	@rm -rf build
	@rm -rf dist
	@echo "$(GREEN)All done$(NO_COLOR)"

test: ## runs unit tests
	@npm t

rebrand: ## renames specific resources to a new name passed with PACKAGE and TITLE variables
	sed -i '' 's/skeleton-ui/$(PACKAGE)/g' ./package.json
	sed -i '' 's/Skeleton UI/$(TITLE)/g' README.md
	sed -i '' 's/Skeleton UI/$(TITLE)/g' src/index.ejs
	sed -i '' 's/Skeleton UI/$(TITLE)/g' src/components/header/Header.tsx
	sed -i '' 's/Skeleton UI/$(TITLE)/g' src/components/header/__tests__/Header.test.tsx
	@echo "$(GREEN)Done!$(WHITE) Feel free to remove the rebrand command from the Makefile$(NO_COLOR)"
