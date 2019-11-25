# Themeswitcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Create an Angular application

To create an angular application, refer to [`getting started`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) document.

## Add Syncfusion Components

Add the below code in `app.component.html` file.

```typescript
<h2> Theme Switcher </h2>
<div>
  <ejs-dropdownlist id='ddlelement' (change)='onChange($event)' #theme switcher [fields]='fields' [dataSource]='data1' placeholder='Select a theme'>
  </ejs-dropdownlist>
  <br>
  <br>

  <ejs-grid [dataSource]='data' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
    </e-columns>
  </ejs-grid>
  <hr/>
  </div>

```

The `onChange` function in the dropdownlist component gets triggered, whenever the theme is changed.


## Add Style Tag 

```typescript
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ej2 - Themeswitcher</title>
  <base href="/">
  <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  // adding style tag
  <style id="theme"></style>
  
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

## Dynamic theme change 

To achieve dynamic theme change, read the stylesheet/CSS file of the selected theme and apply these styles to DOM element using AJAX.

Add the below code in `app.component.ts` file.

```typescript
  public onChange(e: any): void {
    if (e && e.value) {
      debugger
      let ajax: Ajax = new Ajax('assets/styles/' + e.value + '.css', 'GET', true);
      ajax.send().then((result: any) => {
        let styleTag = document.getElementById('theme');
        // styleTag.innerHTML = '';
        styleTag.innerHTML=`/*${e.value}*/` + result;
      });
    }
  }

```

Whenever the `onChange` function is triggered, the respective CSS file of the selected theme is applied to the DOM elements.

## Run the Application

Use the following command to run the application in browser.

```typescript
npm start

```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
