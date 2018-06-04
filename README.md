# cubo-schematics

> A schematics to build components and pages on angular-cli

[![license](https://img.shields.io/github/license/cubonetwork/cubo-schematics.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/cubonetwork/cubo-schematics.svg)](https://github.com/cubonetwork/cubo-schematics/graphs/contributors)

## Install

```sh
npm install cubo-schematics
```

## Usage

Generate a component

```sh
ng generate cubo-schematics:component componentName
```

Generate a page

```sh
ng generate cubo-schematics:page pageName
```

## API

### Component

```text
--inlineStyle, -s              Specifies if the style will be in the ts file
--inlineTemplate, -t           Specifies if the template will be in the ts file
--viewEncapsulation, -v <type> Specifies the view encapsulation strategy
--changeDetection, -c <type>   Specifies the view encapsulation strategy
--prefix, -p <type>            The prefix to apply to generated selectors
--styleext <type>              The file extension to be used for style files
--spec <boolean>               Specifies if a spec file is generated
```

### Page

```text
--inlineStyle, -s              Specifies if the style will be in the ts file
--inlineTemplate, -t           Specifies if the template will be in the ts file
--viewEncapsulation, -v <type> Specifies the view encapsulation strategy
--changeDetection, -c <type>   Specifies the view encapsulation strategy
--prefix, -p <type>            The prefix to apply to generated selectors
--styleext <type>              The file extension to be used for style files
--spec <boolean>               Specifies if a spec file is generated
--root <boolean>               Specifies if a root module is generated
--translate, -i18n <boolean>   Flag to indicate if the component have structure of translate.
--children, -cc <boolean>      Flag to indicate if the component is a children.
```

## License

MIT License © Cubo 2018
