# Portfolio site of knt5 v1 2016-2020 

https://knt5.github.io/demo/portfolio/v1/

## Installation

```
# Install npm packages
npm install -g 'gulp@3.9.0'
npm install

# Build
gulp build

# Watch
gulp

## For E2E test ##

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
npm run server:selenium

# Run E2E test
npm run test:e2e
```

### Smoke test

```
npm run test:smoke
```