# aptify-clean-ui
Cleaner UI for Aptify with CSS updates

# Install Steps
Copy the aptify-clean-ui.css to the styles folder
Copy the aptify-clean-ui.js to the script folder
Copy paste the following code in index.html to load out files towards the very end. Insert after kendo.culture(Aptify.framework.configuration.cultureName);

```
var cleanUICss = document.createElement('link');
cleanUICss.rel = 'stylesheet';
cleanUICss.href = 'styles/aptify-clean-ui.css';
document.head.appendChild(cleanUICss);
                
var cleanUIJs = document.createElement('script');
cleanUIJs.src = 'script/aptify-clean-ui.js';
cleanUIJs.type = 'text/javascript';
document.head.appendChild(cleanUIJs);
```
