var message="This website helps you to learn Data Structure and Algorithm for your Interview Preparation, here you get the resources in structured way for each topic along with practice questions. This website equally focuses on Learning as well as implementation, because your idea won't be clear if you don't implement what you've learned, so practice is very important when it comes to DSA";
var message1=message.split("");
for(let i=0;i<message1.length;i++){
    setTimeout(function(){
    document.getElementById("heading").innerHTML+=message1[i];
    },i*50);
}
var searchid1,searchid2,searchval1,searchvalue2;

function searchlevel(){
    searchid1=document.getElementById("input");
    searchval1=searchid1.value.toUpperCase();
    let ob=["Beginner", "Intermeddiate", "advance"];
    let ul=document.getElementById("Topics");
    let li=ul.getElementsByTagName("li");
    for(let i=0,j=0;j<3&&i<li.length;i++,j++){
        let txtvalue=ob[j];
        if(txtvalue.toUpperCase().indexOf(searchval1)>-1){
            li[i].style.display="";
        }
        else{
            li[i].style.display="none";
        }
        if(i==0) i=6;
        if(i==7) i=26;
        if(i==27) i=-1;
    }
}
function searchtopic(){
    searchid2=document.getElementById("input2");
    searchvalue2=searchid2.value.toUpperCase();
    let ob=["Basic Of any Language","Array","function","searching and sorting","string","recursion","bit manipulation","stack and queue","linkedlist","two pointer","sliding window","greddy algorithm","binary search","advance recursion and backtracking","heap","binary tree and binary search tree","graph","dynamic programming","trie"];
    let index=[1,3,5,8,11,13,15,17,19,21,23,25,28,30,32,34,36,38,40];
    let ul=document.getElementById("Topics");
    let li=ul.getElementsByTagName("li");
    for(let i=0;i<ob.length;i++){
        if(ob[i].toUpperCase().indexOf(searchvalue2)>-1){
            li[index[i]].style.display="";
        }
        else li[index[i]].style.display="none";
    }

}