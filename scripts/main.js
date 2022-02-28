function const_condition(condition){
    return{
        condition: condition
    }
}
function generate(){
    var element = document.getElementById('input');
    var text = element.value
    var list = text.split(\n)
    var json={}
    json.pools=[]
    json.pools.push({})
    json.pools[0].conditions=[]
    json.pools[0].conditions.push(const_condition('killed_by_player'))
    json.pools[0].rolls=1
    json.pools[0].entries=[]
    document.getElementById('output').value=list
}
