let url = "https://github.com/topics";
const request = require ("request");
//const cheerio = require("cheerio");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
       console.log(html);
       //getTopicLinks(html);
    }
}
//function getTopicLinks(html){
    //let $ = cheerio.load(html);
    //let linkElemArr = $("no-underline.d-flex.flex-column.flex-justify-center");
    f//or(let i = 0 ; i<linkElemArr.length; i++){
        l//et href =$(linkElemArr[i]).attr("href");
        //console.log(href);
        //let fullLink = 'https://github.com/${href}';
    //}

//}