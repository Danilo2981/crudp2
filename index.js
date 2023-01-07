function save(){
    var read = document.getElementById('inputTaskIsComplete');
    if(read.checked == true){
        taskList = JSON.parse(localStorage.getItem('listItem3')) ?? []
        var id
        taskList.length != 0 ? taskList.findLast((item) => id = item.id) : id = 0
    
        if(document.getElementById('inputTaskId').value){
            bookList.forEach(value => {
                if(document.getElementById('inputTaskId').value == value.id){
                    value.title         = document.getElementById('inputTaskTitle').value, 
                    value.author        = document.getElementById('inputTaskAuthor').value, 
                    value.date          = document.getElementById('inputTaskDate').value, 
                    value.isComplete    = 1
                }
            });
            document.getElementById('id').value = ''
        }else{
            var item = {
                id          : id + 1, 
                title       : document.getElementById('inputTaskTitle').value, 
                author      : document.getElementById('inputTaskAuthor').value, 
                year        : document.getElementById('inputTaskDate').value, 
                isComplete  : 1,
            }
            bookList.push(item)
        }
        localStorage.setItem('listItem3', JSON.stringify(taskList))
    }else{
        taskList2 = JSON.parse(localStorage.getItem('listItem4')) ?? []
        var id
        taskList2.length != 0 ? taskList.findLast((item) => id = item.id) : id = 0
        if(document.getElementById('inputTaskId').value){
            taskList2.forEach(value => {
                if(document.getElementById('inputTaskId').value == value.id){
                    value.title         = document.getElementById('inputTaskTitle').value, 
                    value.author        = document.getElementById('inputTaskAuthor').value, 
                    value.year          = document.getElementById('inputTaskDate').value, 
                    value.isComplete    = 0
                }
            });
            document.getElementById('inputTaskId').value = ''
        }else{
            var item = {
                id          : id + 1, 
                title       : document.getElementById('inputTaskTitle').value, 
                author      : document.getElementById('inputTaskAuthor').value, 
                year        : document.getElementById('inputTaskDate').value, 
                isComplete  : 0,
            }
            taskList2.push(item)
        }
        localStorage.setItem('listItem4', JSON.stringify(taskList2))
    }
    allData()
    document.getElementById('form').reset()
}

function allData(){
            
    table.innerHTML = ``
    taskList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    taskList.forEach(function (value, i){
       
        var table = document.getElementById('table')
        // if(value.isComplete == 0){
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.title}</td>
                <td>${value.author}</td>
                <td>${value.date}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read(${value.id},'${value.title}','${value.author}',${value.date})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }
    
    })
    table2.innerHTML = ``
    bookList2 = JSON.parse(localStorage.getItem('listItem3')) ?? []
    
    bookList2.forEach(function (value2, i){
       
        var table2 = document.getElementById('table2')
        // console.log(value2.isComplete);
        // if(value2.isComplete == 1){
        table2.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value2.title}</td>
                <td>${value2.author}</td>
                <td>${value2.year}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read2(${value2.id},'${value2.title}','${value2.author}',${value2.year})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value2.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData3(${value2.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }
    
    })
    
}