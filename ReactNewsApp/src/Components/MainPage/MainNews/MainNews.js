import React from "react";
import './MainNews.css'
import {NavLink} from "react-router-dom";
import DateOfCreate from "../../UI/DateOfCreate/DateOfCreate";

const MainNews = (props) => {
    return (
        <>
            {props.headlineInputComparison(props.ActiveNewsFromServer.fields.headline, props.MainPageInput) ? (
                <div className={'Main-News'}>
                    <div className={'Main-News-text-wrapper'}>
                        <NavLink to={`/info/${props.lincCreate(props.ActiveNewsFromServer.fields.headline)}`}
                                 className={'Main-News-head-text'} onClick={() => {
                            props.setSpecificNewsFromClick(props.ActiveNewsFromServer)
                        }}>{props.ActiveNewsFromServer.fields.headline}</NavLink>
                        <span className={'Main-News-content-text'}>
                     {props.ActiveNewsFromServer.fields.trailText}
                </span>
                        <div className={'Main-News-footer-wrapper'}>
                            <DateOfCreate nameOfClass={'Main-News-date'}
                                          webPublicationDate={Date.parse(props.ActiveNewsFromServer.webPublicationDate)}/>
                            <NavLink to={`/info/${props.lincCreate(props.ActiveNewsFromServer.fields.headline)}`}
                                     className={'Main-News-read-more'}
                                     onClick={() => props.setSpecificNewsFromClick(props.ActiveNewsFromServer)}>Read
                                more</NavLink>
                        </div>
                    </div>
                    <NavLink to={`/info/${props.lincCreate(props.ActiveNewsFromServer.fields.headline)}`}
                             className={'Main-News-Img'}
                             onClick={() => props.setSpecificNewsFromClick(props.ActiveNewsFromServer)}>
                        <img src={props.ActiveNewsFromServer.fields.thumbnail} alt=""/>
                    </NavLink>
                </div>
            ) : null}
        </>
    )
}
export default MainNews