# _Base64_ OMG Microservice

[![Open Microservice Guide](https://img.shields.io/badge/OMG%20Enabled-👍-green.svg?)](https://microservice.guide)

An OMG service to encode/decode Base64 content

## Direct usage in [Storyscript](https://storyscript.io/):

##### Encode/Decode
```coffee
encoded = base64 encode content: "hello world"
decoded = base64 decode content: encoded
```

Curious to [learn more](https://docs.storyscript.io/)?

✨🍰✨

## Usage with [OMG CLI](https://www.npmjs.com/package/omg)

##### Encode
```shell
$ omg run encode -a content=<STRING_CONTENT>
```
##### Decode
```shell
$ omg run decode -a content=<BASE64_CONTENT>
```

**Note**: The OMG CLI requires [Docker](https://docs.docker.com/install/) to be installed.

## License
[MIT License](https://github.com/omg-services/base64/blob/master/LICENSE).

