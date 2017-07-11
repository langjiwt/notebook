/**
 * Created by Chris on 2017/7/11.
 */
+function(){
    var note = {
        addBtn: $('#listAddBtn'),
        delBtn: $('#listDelBtn'),
        list: $('.list')[0]
    }

    init();

    function init(){
        note.addBtn.addEventListener('click', function (event) {
            var newEle = document.createElement('li');
            newEle.innerText = 'New Notebook'
            note.list.appendChild(newEle);
        })
    }

/**
 * Elements selector function
 * support id and class name
 */
    function $(selector){
        //selected by id
        if(selector[0] === '#'){
            return document.getElementById(selector.slice(1));
        }

        //selected by class name
        else if(selector[0] === '.'){
            var selectedEle = [];
            var nodes = document.getElementsByTagName('*');

            for(var i in nodes){
                if((nodes[i].nodeType === 1) && (nodes[i].getAttribute('class') === selector.slice(1))){
                    selectedEle.push(nodes[i]);
                }
            }

            if(selectedEle.length === 0){
                return null;
            }

            //if only one element selected then 
            // else if(selectedEle.length === 1){
            //     return selectedEle[0];
            // }
            
            return selectedEle;
        }
    }
}();