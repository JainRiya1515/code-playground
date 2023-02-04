const puppeteer = require("puppeteer");
let page;
console.log("Before");
let browserOpenpromise = puppeteer.launch({headless: false});
let pagesArrpromise = browserOpenpromise.then(function(browser){
    const pagesArrpromise = browser.pages();
    return pagesArrpromise;
    //console.log("Browser opened");

}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com");
    return gotoPromise;
}).then(function(){
    // waiting for element to appear on page
    let elementWaitPromise = page.waitForSelector("input[type='text']" , {visible : true});
    return elementWaitPromise;
})

.then(function(){
    //console.log("Reached Google home Page");
    // type any element on page -> selector
    let keysWillBeSendPromise = page.type("input[type='text']","Linkedin");
    return keysWillBeSendPromise;
}).then(function(){
    // page . keyboard to type special characters
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed

}).then(function(){
    let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
    return elementWaitPromise;
}).then(function(){

    let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return keysWillBeSendPromise;

})


.catch(function(err){
    console.log(err);
})
console.log("After");