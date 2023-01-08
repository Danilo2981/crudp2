function save(){
    var complete = document.getElementById('inputTaskIsComplete');
    if(complete.checked == true){
        taskList = JSON.parse(localStorage.getItem('listItem3')) ?? []
        var id
        taskList.length != 0 ? taskList.findLast((item) => id = item.id) : id = 0
        
        if(document.getElementById('inputTaskId').value){
            taskList.forEach(value => {
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
                date        : document.getElementById('inputTaskDate').value, 
                isComplete  : 1,
            }
            taskList.push(item)
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
                    value.date          = document.getElementById('inputTaskDate').value, 
                    value.isComplete    = 0
                }
            });
            document.getElementById('inputTaskId').value = ''
        }else{
            var item = {
                id          : id + 1, 
                title       : document.getElementById('inputTaskTitle').value, 
                author      : document.getElementById('inputTaskAuthor').value, 
                date        : document.getElementById('inputTaskDate').value, 
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
                <td><button class="btn-table btn-complete" onclick="complete(${value.id},'${value.title}','${value.author}',${value.date})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn-table btn-edit" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn-table btn-delete" onclick="removeData4(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }
    
    })
    table2.innerHTML = ``
    taskList2 = JSON.parse(localStorage.getItem('listItem3')) ?? []
    
    taskList2.forEach(function (value2, i){
       
        var table2 = document.getElementById('table2')
        // console.log(value2.isComplete);
        // if(value2.isComplete == 1){
        table2.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value2.title}</td>
                <td>${value2.author}</td>
                <td>${value2.date}</td>
                <td>
                    <button class="btn-table btn-complete" onclick="complete2(${value2.id},'${value2.title}','${value2.author}',${value2.date})">
                        <i class="fa fa-check"></i>
                    </button></td>
                <td>
                    <button class="btn-table btn-edit" onclick="find(${value2.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn-table btn-delete" onclick="removeData3(${value2.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }
    
    })
    
}

function removeData3(id){
    
    taskList = JSON.parse(localStorage.getItem('listItem3')) ?? []
    taskList = taskList.filter(function(value){ 
        return value.id != id; 
    });
    // localStorage.clear();
    localStorage.setItem('listItem3', JSON.stringify(taskList))
    allData()
}
function removeData4(id){
    taskList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    taskList = taskList.filter(function(value){ 
        return value.id != id; 
    });
    localStorage.setItem('listItem4', JSON.stringify(taskList))
    allData()
}

function find(id){
    taskList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    taskList.forEach(function (value){
        if(value.id == id){
            console.log(id);
            document.getElementById('inputTaskId').value = id
            document.getElementById('inputTaskTitle').value = value.title
            document.getElementById('inputTaskAuthor').value = value.author 
            document.getElementById('inputTaskDate').value = value.date
        }
    })
}

function complete(id1,title1,author1,date1){
    const fecha = new Date(date1);
    const fechaFormateada = fecha.toISOString().substring(0, 10);
    if(id1){
        var item = [{
            id          : id1, 
            title       : title1, 
            author      : author1, 
            date        : fechaFormateada, 
            isComplete  : 1,
        }];   
        taskList = JSON.parse(localStorage.getItem('listItem3')) ?? []
        tasks = item.concat(taskList);
        var itemString = JSON.stringify(tasks);
        localStorage.setItem('listItem3', itemString);
    }
    
    taskList4 = JSON.parse(localStorage.getItem('listItem4')) ?? []
    taskList4 = taskList4.filter(function(value){ 
        return value.id != id1; 
    });
    localStorage.setItem('listItem4', JSON.stringify(taskList4))
    allData()
}
function complete2(id1,title1,author1,date1){
    const fecha = new Date(date1);
    const fechaFormateada = fecha.toISOString().substring(0, 10);
    if(id1){
        var item = [{
            id          : id1, 
            title       : title1, 
            author      : author1, 
            date        : fechaFormateada, 
            isComplete  : 1,
        }];   
        taskList = JSON.parse(localStorage.getItem('listItem4')) ?? []
        tasks = item.concat(taskList);
        var itemString = JSON.stringify(tasks);
        localStorage.setItem('listItem4', itemString);
    }
    
    taskList3 = JSON.parse(localStorage.getItem('listItem3')) ?? []
    taskList3 = taskList3.filter(function(value){ 
        return value.id != id1; 
    });
    localStorage.setItem('listItem3', JSON.stringify(taskList3))
    allData()
}