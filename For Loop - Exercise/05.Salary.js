function salary(websites){
    let money = 0;
    let tabs = 0;
    

    tabs = Number(websites.shift());
    money = Number(websites.shift());

    for (let i = 0; i < tabs;i++){
        let site = websites[i];

        if (site === "Facebook"){
          money -= 150;
        }else if(site === "Instagram"){
          money -= 100;
        }else if(site === "Reddit"){
          money -= 50;
        }
        }
        if (money <= 0){
           console.log(`You have lost your salary.`);
        }else{
          console.log(`${Math.trunc(money)}`);
        }
    }
salary([3,500,"GitHub.com","Facebook"])
