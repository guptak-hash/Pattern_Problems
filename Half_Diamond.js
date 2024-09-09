let n=10;

for(let i=1; i<=n; i++){
  let bag=""
  for(let j=1; j<=i; j++){
    bag+="*"
  }
  console.log(bag);
}


for(let i=n-1; i>=1; i--){
  let bag=""
  for(let j=1; j<=i; j++){
    bag+="*"
  }
  console.log(bag);
}