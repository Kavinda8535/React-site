// export default function()
// {
//     return
//     [
//         {
//             id: 1,
//             productTitle: "Product contetents here",
//             contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean at sapien ut ipsum fringilla rutrum. Quisque pretium lacus non nibh bibendum, ut posuere ex sollicitudin. Donec pellentesque diam non mi gravida iaculis. Nullam ac nibh pretium elit ornare venenatis. Ut in nulla varius, aliquet quam a, commodo purus. Phasellus sit amet tellus imperdiet, venenatis tortor ut, consectetur est. Vestibulum condimentum nulla et nisi feugiat consequat a vel felis. Pellentesque imperdiet nunc quis mauris consequat, sed porttitor eros finibus. Aenean a justo ac lorem consectetur cursus. Integer elementum sapien et sapien pulvinar mollis. Integer ut augue ac mi dictum mattis nec quis risus. Curabitur varius felis sit amet urna ullamcorper, a iaculis ipsum facilisis. In tempor quam pretium, convallis felis a, maximus sem. Nam facilisis leo id eros convallis, vitae maximus metus hendrerit. Aliquam sed quam eget massa commodo iaculis. Cras a quam nec ligula mollis consequat quis a purus. Fusce dignissim eros a molestie maximus. Nunc pellentesque felis in ipsum aliquam malesuada. Proin vel lacus a massa sodales dapibus. Nulla sodales sem ac diam suscipit varius."
//         },
//     ]
// }

let defaultState = {
    color: "red"
}

// reducers are listening that realavent action is dispatch. So they catch that action and execute relevent commands... 
export default function PR(state=defaultState,action)
{
    switch(action.type)
    {
        case "CHANGE_COLOR":
        return { ...state,
            color: action.color     
        }
        break;

        default: return state;
        
    }
    return state;
}