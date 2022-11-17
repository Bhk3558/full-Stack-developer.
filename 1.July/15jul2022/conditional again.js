

function attendclass (usertype) {
    if ( usertype=="student") {
        //allow to attend
        console.log("allow");
    } else if(usertype== "instructor"){
        console.log("allow");
    }else {console.log(":deny")}

}
attendclass ("student");
attendclass ("instructor");
attendclass ("parent");
attendclass ("unknown");