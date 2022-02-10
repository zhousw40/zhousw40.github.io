function 计算(){
    let a11= document.getElementById("a11").value;
    let a12= document.getElementById("a12").value;
    let a21= document.getElementById("a21").value;
    let a22= document.getElementById("a22").value;
    let b1= document.getElementById("b1").value;
    let b2= document.getElementById("b2").value;
    if(!a11||!a12||!a21||!a22||!b1||!b2) Swal.fire({
        icon: 'error',
        title: '请输入完整的二元一次方程组！',
        showConfirmButton: false,
        timer: 1500
    });
    else{
        let x=(b1-a12*((b2-a21/a11*b1)/(a22-a21/a11*a12)))/a11
        let y=(b2-a21/a11*b1)/(a22-a21/a11*a12)
        document.getElementById("ans-card").removeAttribute("hidden");
        document.getElementById("ans-card2").removeAttribute("hidden");
        let ans="x="+x+"\n y="+y
        if (ans=="x=NaN\ny=NaN") document.getElementById('ans').innerText="有无数个解";
        else if (ans=="x=-Infinity\ny=Infinity"||ans=="x=Infinity\ny=-Infinity") document.getElementById('ans').innerText="无解";
        else {
            document.getElementById('ans').innerText=ans;
            document.getElementById("ans-card2").removeAttribute("hidden");
            document.getElementById('1').innerText="①×"+a21+"得"+a21*a11+"x+"+a21*a12+"y="+b1*a21+"③";
            if(a21*a12<0) document.getElementById('1').innerText="①×"+a21+"得"+a21*a11+"x"+a21*a12+"y="+b1*a21+"③";
            else document.getElementById('1').innerText="①×"+a21+"得"+a21*a11+"x+"+a21*a12+"y="+b1*a21+"③";
            if(a22*a11<0)document.getElementById('2').innerText="②×"+a11+"得"+a21*a11+"x"+a22*a11+"y="+b2*a11+"④";
            else document.getElementById('2').innerText="②×"+a11+"得"+a21*a11+"x+"+a22*a11+"y="+b2*a11+"④";
            document.getElementById('3').innerText="④-③得"+"y="+y;
            document.getElementById('4').innerText="把"+"y="+y+"代入①得"+"x="+x;
            document.getElementById('5').innerText="∴原方程组的解为"+"x="+x+"y="+y;
            }
        }
}
function 二元一次方程的正整数解() {
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let c=document.getElementById('c').value;
    let y=1;
    let ans;
    while (1) {
        if((c-b*y)/a<=0)//如果不是正数
        {
            break;//跳出循环
        }
        if((c-b*y)%a!=0)//如果不是整数
        {
            y++;//y加1
            continue;//下一层循环
        }
        if(!ans) ans="x="+(c-b*y)/a+"y="+y+"\n"; else ans=ans+"x="+(c-b*y)/a+"y="+y+"\n";
        y++;
    }
    document.getElementById('ans').innerText=ans;
}
function DelData () {
    document.getElementById('a11').value=""
    document.getElementById('a12').value=""
    document.getElementById('a21').value=""
    document.getElementById('a22').value=""
    document.getElementById('b1').value=""
    document.getElementById('b2').value=""
    document.getElementById('ans').value=""
}
