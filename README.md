# aptify-clean-ui
Cleaner UI for Aptify with CSS updates

# Install Steps
1. Copy the aptify-clean-ui.css to the styles folder
1. Copy the aptify-clean-ui.js to the script folder
1. In index.html, copy paste the following code to load out files towards the very end. Insert after kendo.culture(Aptify.framework.configuration.cultureName);
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
1. Optionally copy the new logo files by overriding the styles/images/Aptify-Logo-81x40.png and styles/images/Aptify-Logo-148x73.png
1. In index.html, find this Aptify.framework.utility.UI.showWaitIndicator("Loading Application..."); and change to Aptify.framework.utility.UI.showWaitIndicator("");
1. New Loading
