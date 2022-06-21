let reverse = () => {
    let num = 20, rev,sum=0;
  while(num>0){
    rev = num % 10;
    sum = sum * 10 + rev;
    num = Math.floor(num/10);
  }
  console.log(sum)
}
reverse()
//