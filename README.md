## Description

A Front for generate QR nestjs with React.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# watch build develop
$ npm run build
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run coverage
```

# Components

## QRComponent
**Properties**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `data` | no | Object  | The data of generate QR                                         |

## FormComponent
**Properties**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `onFormSubmit` | required | Function  | Form of Data

## DownloadButtonComponent
**Properties**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `data` | requ | Object  | The data of generate QR|
|     `type` | required | string  | Type of generate QR|
|     `title` | required | string  | Title of boton

                       

