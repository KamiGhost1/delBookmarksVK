document.addEventListener('DOMContentLoaded', ()=>{




    let btnDel = document.getElementById('del')
    btnDel.addEventListener('click', ()=>{
        chrome.tabs.getSelected(null, (tab)=>{
            chrome.tabs.executeScript(tab.id, {file:"js/injection.js"})
        })
    })
})