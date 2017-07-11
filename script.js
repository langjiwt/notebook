/**
 * Created by Chris on 2017/7/11.
 */
+function(){
    var note = {
        addBtn: $('#listAddBtn'),
        delBtn: $('#listDelBtn'),
    }

    function init(){
        note.addBtn.addEventListener('click', function (event) {

        })
    }

    function $(selector){
        if(selector[0] === '#'){
            return document.getElementById(selector.slice(1));
        }
    }
}();