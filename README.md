# Portfolio site of knt5

https://knt5.github.io/

## Installation

### Development

```
# Install gems
gem install sass
gem install scss_lint

# Install npm packages
npm install -g gulp
npm install

# Build
gulp build

# Watch
gulp
```

### For E2E test

```
# Install selenium-server-standalone (^3.0.1)
wget -O test/e2e/bin/selenium-server-standalone.jar \
  http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar

# Install ChromeDriver and GeckoDriver
brew install chromedriver geckodriver
```

## Testing

### E2E test

```
# Run selenium-server-standalone
npm run selenium

# Run E2E test
npm run test:e2e
```

### Smoke test

```
npm run test:smoke
```
