let books = [
    {
        title : 'Pasteur',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
    {
        title : 'Ibn al-Bitar',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
    {
        title : 'Newton ',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Albert Einstein',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Jabir bin Hayyan',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Edison',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Ibn Sina',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Al-Khwarizmi',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'Alfred Nobel',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    },
     {
        title : 'al-Biruni',
        author : 'Atef Mohamed',
        image : 'https://bit.ly/2Zg2v7d'
    }
    
    
];
(function creatBooks() {
    for (let i = 0; i < books.length; i++) {
        var container = document.getElementById('container'),
            n = 0;
        while (container.children[n].children.length == 9) {
            n++;
        }
            
            
        var shelf = container.children[n],
            containerOfBooks = document.createElement('div'),
            description = document.createElement('div'),
            a = document.createElement('a'),
            images = document.createElement('img'),
            title = document.createElement('h4'),
            author = document.createElement('h6');
            
            images.src = books[i].image;
            shelf.appendChild(containerOfBooks);
            
            
            containerOfBooks.className = 'containerOfBooksStyle';
            images.className = 'imagesStyle';
            description.className = 'descriptionStyle';
            author.className = 'authorStyle';
            title.className = 'titleStyle';
            
            
            containerOfBooks.appendChild(a);
            a.appendChild(images);
            a.setAttribute('href','#');
            
            containerOfBooks.appendChild(description);
            
            description.appendChild(title);
            description.appendChild(author);
            
            var titleName = document.createTextNode(books[i].title);
            title.appendChild(titleName);
            
            var authorName = document.createTextNode(books[i].author);
            author.appendChild(authorName);
    }     
            
})();
function uploadData() {
   
    var container = document.getElementById('container'),
            n = 0;
        while (container.children[n].children.length == 9) {
            n++;
             if (n == container.children.length) {
                alert('FULL SPACE');
            }
        }
    var valueA = document.getElementById("titleOfTheBook").value,
        valueB = document.getElementById("authorOfTheBook").value,
        valueC = document.getElementById("linkOfTheBook").value;
    books.push({title: valueA,author: valueB,image: valueC});
    let shelf = container.children[n],
            containerOfBooks = document.createElement('div'),
            description = document.createElement('div'),
            a = document.createElement('a'),
            images = document.createElement('img'),
            title = document.createElement('h4'),
            author = document.createElement('h6');
            
            images.src = books[books.length-1].image;
            shelf.appendChild(containerOfBooks);
            
            containerOfBooks.className = 'containerOfBooksStyle';
            images.className = 'imagesStyle';
            description.className = 'descriptionStyle';
            author.className = 'authorStyle';
            title.className = 'titleStyle';
            
            containerOfBooks.appendChild(a);
            a.appendChild(images);
            a.setAttribute('href','#');
            containerOfBooks.appendChild(description);
            
            description.appendChild(title);
            description.appendChild(author);
            
            let titleName = document.createTextNode(books[books.length-1].title);
            title.appendChild(titleName);
            
            let authorName = document.createTextNode(books[books.length-1].author);
            author.appendChild(authorName);
}
