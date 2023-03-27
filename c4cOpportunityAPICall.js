const ObjectID = '00163E02944F1ED1A6E2136ED48DFB4D';
const SystemUrl = '';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

//excute the function when respnse is received
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
    var resObj = JSON.parse(this.responseText);
    //console.log(resObj);
    var { results } = resObj.d;
    //console.log(results);

    //destructure the required data

    var { ObjectID,
          Name,
          ID,
          LifeCycleStatusCodeText,
          CreationDate,
          CreatedBy,
          LastChangeDate,
          LastChangedBy
          } = results;
    var opportunityObject = {
      Name : Name,
      ID : ID,
      LifeCycleStatusCodeText:LifeCycleStatusCodeText,
      CreationDate:CreationDate,
      CreatedBy:CreatedBy,
      LastChangeDate:LastChangeDate,
      LastChangedBy:LastChangedBy
    };

    console.log(opportunityObject);
    }
});

var url = `https://${SystemUrl}/sap/c4c/odata/v1/c4codataapi/OpportunityCollection('${ObjectID}')`;
console.log(url);
//setting request method
xhr.open("get", url );

//API endpoint with optional query parameters
//xhr.open("get", "https://<SystemUrl>/sap/c4c/odata/v1/c4codataapi/OpportunityCollection('{ObjectID}')?$select=array&$expand=array");

//Available API Endpoints
//https://{domain}/sap/c4c/odata/v1/c4codataapi

//adding request headers
xhr.setRequestHeader("Accept", "application/json");


//Available Security Schemes for productive API Endpoints
//Basic Authentication
//Basic Auth : provide username:password in Base64 encoded in Authorization header
//DESALESOPS:Welcome1 Base64 encoding :  ==
xhr.setRequestHeader("Authorization", "Basic ");

//sending request
xhr.send(data);
