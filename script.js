console.log("working");

let getData = async()=>{
    let res = await fetch("https://api.quotable.io/random");
    json = await res.json();
    console.log(json);
    return json;

}

const copy = (data)=>{
    let cpyBtn= document.querySelector(".copy");

    cpyBtn.addEventListener("click",async()=>{
        await navigator.clipboard.writeText(data);
    })

};

const refresh = ()=>{
    let refBtn = document.querySelector(".refresh");

    refBtn.addEventListener("click",async()=>{
        await showData();
    })
}





let showData = async()=>{
    let data =await getData();
    copy(data.content);
    let head= document.querySelector(".head");
    head.innerText=data.author;

    let tags = document.querySelector(".tags");
    tags.innerHTML="";
    let tagData = data.tags;

    tagData.forEach((tag)=>{
        span=document.createElement("span");
        span.innerText=tag;
        span.classList.add("border", "border-[#6466E9]", "rounded-3xl", "p-2" ,"py-1", "text-[10px]")
        tags.append(span);
    })

    let quote = document.querySelector(".quote");
    console.log(quote)
    let content = data.content;    
    
    let quotespan= document.createElement("span");
    quote.innerHTML="";
    quotespan.innerText=content;
    quote.innerHTML="";
    quote.append(quotespan);

    

}

showData();
refresh();





