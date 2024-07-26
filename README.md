{ "cli": { "version": ">= 7.8.1", "appVersionSource": "local" }, "build": { "preview": { "android": { "buildType": "apk"

      }
    },
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },

    "production": {
      "autoIncrement": true
    }

}, "submit": { "production": {} } }

{ "cli":
 { "version": ">= 10.1.1", "appVersionSource": "local" }, 
    "build": 
    { "preview": { "android": { "buildType": "apk"

      }
    },
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "workflow": "managed"
    },

    "production": {
      "autoIncrement": true
    }

}, "submit": { "production": {} } }









name: update
on: push

jobs:
  update:
    name: EAS Update
    runs-on: ubuntu-latest
    steps:
      - name: Check for EXPO_TOKEN
        run: |
          if [ -z "${{ secrets.EXPO_TOKEN }}" ]; then
            echo "You must provide an EXPO_TOKEN secret linked to this project's Expo account in this repo's secrets. Learn more: https://docs.expo.dev/eas-update/github-actions"
            exit 1
          fi

      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18.x
          cache: yarn

      - name: Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Install dependencies
        run: yarn install

      - name: Publish update
        run: eas update --auto
