const Menu=async()=>{
    let data=await fetch("https://turajarmin.github.io/json-1/db.json")
    let res=await data.json()
    console.log(res);
    let menu=res.menu.map(elem=>{
        if (elem.dropdown.length===0) {
            console.log(elem);
            return `
            <li class="nav-item">
              <a class="nav-link text-capitalize text-white" style="font-size:12px;font-weight:bold;" href=${elem.link}>${elem.name}</a>
            </li>
            `
        }else{
            console.log(elem);
            return `<li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-capitalize text-white"
              href=${elem.link}
              role="button"
              data-bs-toggle="dropdown"
               style="font-size:12px;font-weight:bold;"
              >${elem.name}</a
            >
            <ul class="dropdown-menu">
              ${elem.dropdown.map((menu)=>{
                  return `<li><a class="dropdown-item" href=${menu.link}>${menu.name}</a></li>`  
              }).join("")}
            </ul>
          </li>`
        }
    })
    
    document.querySelector(".navbar-nav").innerHTML=menu.join("")
}
export default Menu;
