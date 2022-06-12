import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'
const CommercialSlice = createSlice({     
    name : 'commercial',  
    initialState : [],
    reducers:{
        addCommercial:  (state,action) => { 
            const megazine = {...action.payload}
            state = [...state, megazine]

        },
        



        // loadMegazine:  (state,action) => { 
        //     const arrayCopy = [...action.payload];
        //     arrayCopy.sort(compareBy_ASC('time'));  // 시간순 정렬

        //     function compareBy_ASC(key){
        //         return function (a,b){
        //             let x = a[key];
        //             let y = b[key];

        //             if (x > y) return -1;
        //             if (x < y) return 1;
        //             return 0;
        //         }
        //     }
        //     return [...arrayCopy];
           
        // },
        
        // saveMegazine:  (state,action) => { 
        //     const megazine = {...action.payload}
        //     state = [...state, megazine]

        // },

        
        
        
        // deleteMegazine: (state,action) => { 
        //     console.log(action.payload)
        //     const new_megazine_list =state.filter((m)=>{
        //         return m.id !== action.payload;
        //     })

        //     console.log(new_megazine_list)
        //     state = [...new_megazine_list]

        // },
        
}
})

export const { addCommercial } = CommercialSlice.actions;

export default CommercialSlice;