import React from "react";
import './Result.css'
const Result = props =>{
    const arrOfNums = props.functionAll();
    return(
        <table className="Table">
            <thead>
                <th>Number of character</th>
                <th>Character</th>
                <th>Count of Character</th>
            </thead>
            <tbody>
                {arrOfNums.map((arr, index)=>{
                    return <tr key={index}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {arr[0]}
                        </td>
                        <td>
                            {arr[1]}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default Result