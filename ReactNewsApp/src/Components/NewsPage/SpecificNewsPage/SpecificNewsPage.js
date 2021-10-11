import React, {useCallback, useEffect, useState} from "react";
import './SpecificNewsPage.css'
import DateOfCreate from "../../UI/DateOfCreate/DateOfCreate";
import Highlight from "../../UI/Highlight/Highlight";
import LoremIpsum from "../../LoremIpsum/LoremIpsum";

const SpecificNewsPage = (props) => {
    const [filter, setFilter] = useState('');
    const [counter, setCounter] = useState(0);
    const light = useCallback((str) => {
        return <Highlight filter={filter} str={str} setCounter={setCounter}/>
    }, [filter])
    useEffect(() => {
        setCounter(document.getElementsByClassName('highlight-text-area').length);
    }, [filter])
    return (
        <div className={'SpecificNewsPage-wrapper'}>
            <div className="SpecificNewsPage-headerImage"
                 style={{backgroundImage: `url(${props.News.fields.thumbnail})`}}></div>
            <div className={'SpecificNewsPage-Search-wrapper'}>
                <div className={'SpecificNewsPage-SearchText-wrapper'}>
                    <input className={'SpecificNewsPage-SearchText'} type="text" placeholder={'Search text...'}
                           value={filter} onChange={(event) => setFilter(event.target.value)}/>
                    <div className={'SpecificNewsPage-ClearSearchText'} onClick={() => setFilter('')}>clear</div>
                </div>
                {filter !== '' ?
                    <span className={'SpecificNewsPage-CountOfСoincidencesText'}>{counter} matches found</span> : null}
            </div>
            <div className="SpecificNewsPage-textWrapper">
                <h3 className="SpecificNewsPage-headerText">{props.News.fields.headline}</h3>
                <div className="SpecificNewsPage-headerInfo-wrapper">
                    <span
                        className="SpecificNewsPage-written-by">{props.News.fields.byline ? `Written by ${props.News.fields.byline}` : null}</span>
                    <DateOfCreate nameOfClass={'SpecificNewsPage-date'}
                                  webPublicationDate={Date.parse(props.News.webPublicationDate)}/>
                </div>
                <div className="SpecificNewsPage-grey-line"></div>
                <div className="SpecificNewsPage-content-text">
                    {props.News.fields.bodyText.length > 0 ? light(props.News.fields.bodyText) : light(LoremIpsum())}
                </div>
            </div>
        </div>
    )
}
export default SpecificNewsPage