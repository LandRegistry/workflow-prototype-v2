window.addEventListener('load', function() {
    const myList = document.querySelector('body > .govuk-footer').querySelector('.govuk-footer__inline-list');

    // Create the hyperlink
    const link = document.createElement('a');
    link.href = '#'; 
    link.textContent = 'Clear data (popup)'; 
    link.classList.add('govuk-footer__link', 'govuk-footer__link', 'govuk-!-display-inline-block', 'govuk-!-margin-right-1', 'govuk-!-padding-top-1', 'govuk-!-padding-bottom-1');
    link.addEventListener("click", function() {// Open the popup window
        window.open('/manage-prototype/clear-data', 'targetWindow', `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=350,height=450`);
    });

    // Create the list item
    const listItem = document.createElement('li');
    listItem.classList.add('govuk-footer__inline-list-item');        
    listItem.appendChild(link);

    // Append the list item to the existing footer list
    myList.appendChild(listItem);
});

