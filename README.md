# aptify-clean-ui
Cleaner UI for Aptify with CSS updates

# Install Steps
1. Copy the aptify-clean-ui.css to the styles folder
1. Copy the aptify-clean-ui.js to the script folder
1. Copy paste the following code in index.html to load out files towards the very end. Insert after kendo.culture(Aptify.framework.configuration.cultureName);
    ```
    //inject the new css
    var cleanUICss = document.createElement('link');
    cleanUICss.rel = 'stylesheet';
    cleanUICss.href = 'styles/aptify-clean-ui.css';
    document.head.appendChild(cleanUICss);

    //inject the new js
    var cleanUIJs = document.createElement('script');
    cleanUIJs.src = 'script/aptify-clean-ui.js';
    cleanUIJs.type = 'text/javascript';
    document.head.appendChild(cleanUIJs);
    ```
1. Optionally copy the new logo files. Override the styles/images/81x40.png and styles/images/148x73.png
