# micro-lc Redoc Plugin walkthrough

[![Build Status][github-actions-svg]][github-actions]

This plugin let you embed redoc inside microlc. It recives from the configuration the `openApiSpecUrl` to the .json file in order to obtain information about your APIs.

[github-actions]: https://github.com/micro-lc/micro-lc-redoc-plugin/actions
[github-actions-svg]: https://github.com/micro-lc/micro-lc-redoc-plugin/workflows/build-publish/badge.svg


## Example of configuration

```json
{
    "id": "plugin-redoc",
    "label": "ReDoc Plugin",
    "icon": "fas fa-redo",
    "order": 8,
    "integrationMode": "qiankun",
    "category": "API Documentation",
    "pluginRoute": "/redoc",
    "pluginUrl": "/micro-lc-redoc-plugin/",
    "props": {
    "openApiSpecUrl": "https://micro-lc.io/api/documentation/json"
    }
}
```