import Request from 'superagent';

export const loadColor =()=>(dispatch)=>
{
    var url =`http://www.colr.org/json/color/random`;
    Request.get(url).then((response)=> {
        let colour = "#" + response.body.colours.hex;
        dispatch(changeColor("#" +  response.body.new_color));
    });

}

export function changeColor(color)
{
    return
    {
        type: "CHANGE_COLOR",
        color //color: color (insted of this we can use just only color)
    }
}
