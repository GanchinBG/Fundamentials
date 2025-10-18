function pass(credential){
  let username = credential.shift();
  let password = credential.shift();
  let str = 0;

    while (password !== credential[str]){
      str++;
      
    }
    console.log(`Welcome ${username}!`);
    
}
pass(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
 