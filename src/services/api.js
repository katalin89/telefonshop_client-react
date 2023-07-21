function api(path,method,body=null){
    const url = 'http://localhost:8080/api/v1/telefon/' + path;
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json,charset=utf-8',
        },
    };
    if(body!=null){
        options.body = JSON.stringify(body);
    }
    return fetch(url,options);
}

async function getAllPhones(){
    let data=await api("all",'GET');

    data=await data.json();

    return data;
}

async function addPhones(phone){
    let data=await api("add",'POST',phone);

    data=await data.json();

    return data;
}

async function getAllBrands(){
    let data=await api("brands",'GET');

    data=await data.json();

    return data;
}

async function deletePhone(phoneId){
    let data =await api(`delete/${phoneId}`,'DELETE');
}

async function deletePhoneByModel(model){
    let data=await api(`deleteByModel/${model}`,'DELETE');
}

async function updatePhone(phone){

    let data=await api(`update`,'PUT',phone);

    return data;
}


async function sortByModel(){

    let data=await api(`sortByModel`,'GET');

    data=await data.json();

    return data;


}

export{getAllPhones,addPhones,getAllBrands,deletePhone,updatePhone,sortByModel}