function a(elem, index=0,){
    if (elem.includes('.')){
        return document.getElementsByClassName(elem.split('.')[1])[index];
    }
    if (elem.includes('#')){
        return document.getElementById(elem.split('#')[1]);
    }
    if (elem.includes('$')){
        return document.getElementsByTagName(elem.split('$')[1])[index];
    }
}