function const_condition(condition){
    return{
        condition: condition
    }
}
function const_function(fun){
    var obj={}
    obj["function"]=fun
    return obj
}
function const_item(item,weight,count,loot_count){
    var ret = {}
    ret.type="item"
    ret.name=item
    ret.weight=weight
    ret.functions=[]
    if(count.match(/\d+-\d+/)){
        var count_min=count.match(/\d+/g)[0]
        var count_max=count.match(/\d+/g)[1]
        var set_count=const_function('set_count')
        set_count.count={}
        set_count.count.min=count_min
        set_count.count.max=count_max
        ret.functions.push(set_count)
    }else{
        alert('please use (min)-(max)')
    }
    if(loot_count.match(/\d+-\d+/)){
        var loot_min=loot_count.match(/\d+/g)[0]
        var loot_max=loot_count.match(/\d+/g)[1]
        var looting_enchant_count=const_function('looting_enchant')
        looting_enchant_count.count={}
        looting_enchant_count.count.min=loot_min
        looting_enchant_count.count.max=loot_max
        ret.functions.push(looting_enchant_count)
    }else{
        alert('please use (min)-(max)')
    }
    return ret
}
function generate(){
    var input = document.getElementById('input');
    var text = input.value
    var list = text.split('\n')
    var json={}
    json.pools=[]
    json.pools.push({})
    json.pools[0].conditions=[]
    json.pools[0].conditions.push(const_condition('killed_by_player'))
    json.pools[0].rolls=1
    json.pools[0].entries=[]
    for(let i = 0;i<list.length;i++){
        var target = list[i]
        var arr=target.split(',')
        var item_obj = const_item(arr[0],arr[1],arr[2],arr[3])
        json.pools[0].entries.push(item_obj)
    }
    var output=JSON.stringify(json, null, 4)
    document.getElementById('output').value=output
}
