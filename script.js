var count=0;
var secondStatementCondition=false;
class Client{
    emailAddress=null;
    alterEmailAddress=null;
    subject=null;
    message=null;
    constructor(emailAddress,alterEmailAddress,subject,message){
        this.emailAddress=emailAddress;
        this.alterEmailAddress=alterEmailAddress;
        this.subject=subject;
        this.message=message;
    }
    get emailAddress() {
        return this._emailAddress;
    }

    get alterEmailAddress() {
        return this._alterEmailAddress;
    }

    get subject() {
        return this._subject;
    }

    get message() {
        return this._message;
    }
}
function emailFunction(client){
    (function(){
        emailjs.init("2ysrvGqB7PcuRQljf");
    })();
    var params={
        to:client.emailAddress,
        subject:client.subject,
        message:client.message, 
    }
    var serviceId="service_7zl5r9f";
    var templateId="template_q4o8h0h";
    console.log(client);
    emailjs.send(serviceId,templateId,params).then(res=>{
    alert("email sent successfully");
    }).catch((error)=>{
        console.log(error);
        count++;
        console.log(count);
        if(secondStatementCondition==true){
            return;
        }
        if(count<=5&&(!secondStatementCondition)){
        emailFunction(client);
        }else{
            client.emailAddress=client.alterEmailAddress;
            secondStatementCondition=true;
            emailFunction(client);
        }
    });
}

console.log("checking0");
function sendingEmail(e){
let to= document.querySelector("#to").value;
let alterEmailAddress=document.querySelector("#alterEmail").value;
let subject=document.querySelector("#subject").value;
let message=document.querySelector("#message").value;
// console.log(to+""+alterEmailAddress+""+subject+""+message);
const client =new Client(to,alterEmailAddress,subject,message);
console.log(client.emailAddress+" "+client.alterEmailAddress+" "+client.subject+" "+client.message);
e.preventDefault();
emailFunction(client);
}


