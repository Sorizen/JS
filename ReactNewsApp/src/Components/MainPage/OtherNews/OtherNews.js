import React from "react";
import {NavLink} from "react-router-dom";
import './OtherNews.css'
import DateOfCreate from "../../UI/DateOfCreate/DateOfCreate";


const OtherNews = (props) => {
    return (
        <div className={'OtherNews-wrapper'}>
            {
                props.ActiveNewsFromServer.map((NewsItem, index) => {
                    return (index !== 0 && props.headlineInputComparison(NewsItem.fields.headline, props.MainPageInput) ? (
                            <div className={'Other-News-Item'} key={index}>
                                <NavLink to={`/info/${props.lincCreate(NewsItem.fields.headline)}`} className={'OtherNews-read-more'} onClick={()=>props.setSpecificNewsFromClick(NewsItem)}>
                                    <img src={NewsItem.fields.thumbnail} alt=""/>
                                </NavLink>
                                <div className={'OtherNews-text-wrapper'}>
                                    <NavLink to={`/info/${props.lincCreate(NewsItem.fields.headline)}`} className={'OtherNews-head-text'} onClick={()=>props.setSpecificNewsFromClick(NewsItem)}>{NewsItem.fields.headline}</NavLink>
                                    <span className={'OtherNews-content-text'}>
                                        {NewsItem.fields.trailText}
                                    </span>
                                    <div className={'OtherNews-footer-wrapper'}>
                                        <DateOfCreate nameOfClass={'OtherNews-date'} webPublicationDate = {Date.parse(NewsItem.webPublicationDate)}/>
                                        <NavLink to={`/info/${props.lincCreate(NewsItem.fields.headline)}`} className={'OtherNews-read-more'} onClick={()=>props.setSpecificNewsFromClick(NewsItem)}>Read more</NavLink>
                                    </div>
                                </div>
                            </div>
                        ) : null)})
            }
        </div>
    )
}
export default OtherNews