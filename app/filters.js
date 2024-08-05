//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('uppercase', function (content) {
  return content.toUpperCase();
})

addFilter('toMonth', function(mth) { 
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    if (mth > 0){ 
        return months[mth - 1]; // returns month number as the word
    } else {
        return mth;      
    }  
})

addFilter('zeroPadding', function(theNumber) { 
    const numStr = theNumber.toString();

    // Check if the number is less than 10 and does not start with a zero
    if(numStr < 10 && numStr.charAt(0) !== '0'){
        return '0'+ numStr;
    }else{
        return numStr;
    }
    
})

addFilter('trimWhiteSpace', function(strTxt) {
    if(!strTxt) return;
    return strTxt.trim();
})



