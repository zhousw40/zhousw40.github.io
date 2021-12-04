confirm("请先将每个二元一次方程化成ax+by=c的形式");
function 计算(){
    let a11= document.getElementById("a11").value
    let a12= document.getElementById("a12").value
    let a21= document.getElementById("a21").value
    let a22= document.getElementById("a22").value
    let b1= document.getElementById("b1").value
    let b2= document.getElementById("b2").value
    if(!a11||!a12||!a21||!a22||!b1||!b2) alert("请输入完整方程组");
    else{
        let x=(b1-a12*((b2-a21/a11*b1)/(a22-a21/a11*a12)))/a11
        let y=(b2-a21/a11*b1)/(a22-a21/a11*a12)
        let ans="x="+x+" y="+y
        if (ans=="x=NaN y=NaN") document.getElementById('ans').value="有无数个解";
        else if (ans=="x=-Infinity y=Infinity"||ans=="x=Infinity y=-Infinity") document.getElementById('ans').value="无解";
        else document.getElementById('ans').value=ans;
    }
}
function DelData () {
    document.getElementById('a11').value = ''
    document.getElementById('a12').value = ''
    document.getElementById('a21').value = ''
    document.getElementById('a22').value = ''
    document.getElementById('b1').value = ''
    document.getElementById('b2').value = ''
    document.getElementById('ans').value = ''
}