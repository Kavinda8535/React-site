//import Request from 'superagent';
import Request from 'axios';

// export function loadColor(dispatch)
// {
//     var url =`http://www.colr.org/json/color/random`;
//     Request.get(url).then((response)=> {
//         let colour = "#" + response.body.colours.hex;
//         dispatch(changeColor("#" +  response.body.new_color));
//     });

// }

//loadColor action dispatcher
export const loadColor = () => dispatch => {
    var url =`http://www.colr.org/json/color/random`;
    return Request.get(url)
        .then((response)=>{
            dispatch(changeColor("#" + response.data.new_color))
        })
        .catch((err) =>{
            console.error(err);
        });
}

//changeColor action dispatcher
export function changeColor(color)
{
    return {
        type: "CHANGE_COLOR",
        payload: color //color: color (insted of this we can use just only color)
    }
}
