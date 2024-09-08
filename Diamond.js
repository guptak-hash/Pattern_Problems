let n=5;


for(let i=1; i<=n; i++){
  let bag1=""
  for(let j=n; j>i; j--){
    bag1+=" "
  }
  for(let j=1; j<=2*(i-1)+1; j++){
    bag1+="*"
  }
 console.log(bag1);
}



for(let i=1; i<=n-1; i++){
  let bag1=""
  for(let j=1; j<=i; j++){
    bag1+=" "
  }
  for(let j=1; j<=2*(n-i)-1; j++){
    bag1+="*"
  }
  console.log(bag1);
}