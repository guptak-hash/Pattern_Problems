
let N=5;

for(let i=1; i<=N; i++){
    let bag=""
    for(let j=1; j<=2*N-1; j++){
      if((N-i+1)<=j && (2*N-i)>=j){
        bag+="*"
      }
      else{
        if(j<(2*N-i)){
          bag+=" "
        }
      }
    }
    console.log(bag);
  }