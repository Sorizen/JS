import React from "react";
import './hightlight.css';
const Hightlight = (props) => {
    const { filter, str } = props
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {
        return str.split(regexp).map((s, index, array) => {
            if (index < array.length - 1) {
                const c = matchValue.shift();
                return <span key={index}>{s}<span className={'highlight-text-area'}>{c}</span></span>
            }
            return s
        })

    }
    return str
}
export default Hightlight