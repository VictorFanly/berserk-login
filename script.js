var username = document.getElementById('username');
var pass = document.getElementById('password');

username.addEventListener('focus',()=>{
    username.style.border = "3px groove #213e59"
});
username.addEventListener('blur',()=>{
    username.style.border = "2px groove #778899";
});

pass.addEventListener('focus',()=>{
    pass.style.border = "3px groove #213e59"
});
pass.addEventListener('blur',()=>{
    pass.style.border = "2px groove #778899";
});