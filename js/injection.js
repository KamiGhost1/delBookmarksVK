var books = '';
var btn = '';
var url = window.location.href

if(url != "https://vk.com/bookmarks"){
    alert(`open https://vk.com/bookmarks`)
}else{
    books = document.getElementsByClassName('bookmarks_rows bookmarks_rows_')[0]
    // btn = books.children[0].children[1].children[1]
    // btn = books.children[1].children[0].children[1].children[1].children[0]
    // console.log(btn)
    // for(let i=1;i<books.children.length;i++){
    //     btn = books.children[i].children[0].children[1].children[1].children[0]
    //     btn.click();
    // }
    while (books.children.length > 0 ){
        books = document.getElementsByClassName('bookmarks_rows bookmarks_rows_')[0]
        if(books.children.length === 0 ){
            break
        }
        for(let i=1;i<books.children.length;i++){
            if(books.children[i].children.length ===3){
                console.log(books.children[i].children[1])
                btn = books.children[i].children[1].children[1].children[1].children[0];
                btn.click();
            }else{
                if(books.children[i].children[0].children.length === 3){
                    btn = books.children[i].children[0].children[2].children[1].children[0]
                    btn.click();
                }else{
                    btn = books.children[i].children[0].children[1].children[1].children[0]
                    btn.click();
                }
            }
        }
        window.location.href = url
    }
    window.location.href = url
}



