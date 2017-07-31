## GOJSON

GOJSON is an advanced version of JSON data tranfer format. It allows to use Golang-like tags inside JSON properties.

### Basic exmaple of gojson

```
{
    "name": "Joe" `"max-length": 4`,
    "sename": "Doe",
    "sister": {
        "name": "Jessy",
        "sename": "Doe"
    } `"editable": false`,
    "colors": [
        "red",
        "blue",
        "dark"
    ]
}
```

### JS version

This is JS lib for parsing/serilizing gojson. Serializer may take fallowing structure as input:

```js
{
    name: {
        value: "Joe",
        tag: `"max-length": 4`
    },
    sename: {
        value: "Doe"
    },
    sister: {
        tag: `"editable": false`,
        value: {
            name: {
                value: "Jessy"
            },
            sename: {
                value: "Doe"
            },
        }
    },
    colors: {
        value: [
            "red",
            "blue",
            "dark"
        ]
    }
}
```


##### Golang version is also [available](/)

