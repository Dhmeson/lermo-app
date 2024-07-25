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