function telephoneCheck(str) {
    const regex = new RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
    return regex.test(str);
}

console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("1(757) 622-7382"));
console.log(telephoneCheck("555-555-5555"));