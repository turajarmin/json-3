const Parallax=async()=>{
    let data=await fetch("https://turajarmin.github.io/json-1/db.json")
    let res=await data.json();
    let parallax=`
    <div style="height: calc(100vh - 50px); background: url(${res.parallax.image}) no-repeat center center fixed;background-size: cover;" class="d-flex justify-content-center align-items-center">
        <div style="width:30%;padding:30px;box-sizing:border-box;background-color:rgba(0,0,0,0.5);color:whitesmoke;">
            <h1>${res.parallax.title}</h1>
            <p style="color:${res.parallax.color};font-size:${res.parallax.fontsize}">${res.parallax.content}</p>
        </div>
    </div>`
    document.querySelector(".parallax").innerHTML=parallax
}
export default Parallax;