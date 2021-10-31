import React from 'react';
import classes from './index.module.scss';
import Logic from './index.logic';

const UrlCreator = () => {

    const { dropDownList,
        dropDown,
        selectedUrl,
        urlInput,
        urlsBlocks,
        dropDownHandler,
        selectedUrlHandler,
        urlInputHandler,
        addUrlHandler } = Logic();

    return (

        <div className={classes.url_creator__urlContainer}>

            {urlsBlocks.length ?
                <div className={classes.url_creator__urlContainer}>
                    {urlsBlocks.map(urlBlock => {
                        return (
                            <div key={urlBlock.selectedUrl + urlBlock.urlInput}>
                                <div>{urlBlock.selectedUrl}</div>
                                <div>{urlBlock.urlInput}</div>
                            </div>
                        )
                    })}
                </div>
                : null
            }
        </div>

    )

}

export default UrlCreator;