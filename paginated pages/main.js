const list_items = document.getElementById('getPosts').addEventListener
('click', getPosts);


const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let row = 5;

function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    
    console.log(paginatedItems);
   
    for (let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);
        // console.log(item[i]);

    }
}
function SetupPagination (items, wrapper, rows_per_page){
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i ++){

        let btn = paginationButton(i);
        wrapper.appendChild(btn);
    }

}

function PaginationButton (page, items){
    let button = document.createElement('button');
    button.innerHTML = page;

    if (current_page == page) button.classList.add(active);
    return button;
}
DisplayList (list_items, list_element, row, current_page);
SetupPagination(list_items, paginated_element, rows);































//const article= document.getElementById('article.name');                 
//const pagination_element = document.getElementById('pagination');

//                 let current_page = 1;
//                 let rows =5; 

//                 function DisplayArticles(articles, wrapper, row_per_page, page){
//                     wrapper.innerHTML ="";
//                     page--;

//                     let start = rows_per_page * page;
//                     let end= start + row_per_page;
//                     let paginatedArticles= article.slice(start, end);
//                     console.log(paginatedArticles);
//                     for (let i = 0; i< paginatedArticles.length; i++){
//                         let article = paginatedArticles[i];

//                         let article_element = document.createElement('div');
//                         article_element.classArticles.add('article');
//                         article_element.innerText = article;

//                         wrapper.appendChild(article_element);
//                     }
//                 }

//                 DisplayArticles(article_output, article_elements, current_page);


// function getComment(){
//     fetch('comments.json')
//     .then(function(res){
//         return res.json();
//     })
// }
