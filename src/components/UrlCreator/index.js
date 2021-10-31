import React from 'react';
import classes from './index.module.scss';
import Logic from './index.logic';
import { connect } from 'react-redux';

// const UrlCreator = ({ addUrlHandler }) => {
const UrlCreator = () => {

    const {
        dropDownList,
        dropDown,
        selectedUrl,
        urlInput,
        urlsBlocks,
        errorMessage,
        dropDownHandler,
        selectedUrlHandler,
        urlInputHandler,
        addUrlHandler,
        removeUrlHandler
    } = Logic();

    return (
        <div className={classes.url_creator__container}>

            <div className={classes.url_creator__dashboard}>

                <div className={classes.url_creator__label}>Block URL's</div>

                <div className={classes.url_creator__dropDown} onClick={dropDownHandler}>

                    <div className={classes.url_creator__selectedUrl}> {selectedUrl.label ? selectedUrl.label : ''}</div>

                    {dropDown ?
                        <ul>
                            {dropDownList.map(url => {
                                const disabledOption = urlsBlocks.find(optionObj => url.value === optionObj.value);
                                return (
                                    <li className={`${disabledOption ? classes['disabled'] : ''}`} key={url.label} onClick={() => selectedUrlHandler(url)}>{url.label}</li>
                                )
                            })}
                        </ul>
                        : null
                    }

                </div>

                <div className={classes.url_creator__urlInput}>
                    <input
                        type='text'
                        value={urlInput}
                        onChange={value => urlInputHandler(value)}
                        placeholder='e.g./index.php'
                    />
                    {errorMessage ? <div className={classes.url_creator__urlInput__errorMessage}>URLs must start with ‘/’ </div> : ''}
                </div>

                <button className={classes.url_creator__addButton} onClick={addUrlHandler}>Add</button>
            </div>




            {urlsBlocks.length ?
                urlsBlocks.map(urlBlock => {
                    return (

                        <div className={classes.url_creator__urlBlock} key={urlBlock.selectedUrl + urlBlock.urlInput}>
                            <div className={classes.url_creator__urlBlock__label}>{urlBlock.selectedUrl}</div>
                            <div className={classes.url_creator__urlBlock__urls_container}>
                                {urlBlock.urlInput ?
                                    <div className={classes.url_creator__urlBlock__url}>
                                        {urlBlock.urlInput}
                                        <div className={classes.url_creator__urlBlock__remove_url} onClick={() => removeUrlHandler(urlBlock)}>x</div>
                                    </div>
                                    : ''}
                            </div>
                        </div>

                    )
                })
                : null
            }


        </div>
    )

}

const mapStateToProps = state => {
    return {
        count: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addUrlHandler: () => dispatch({ type: 'ADD_URL' }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlCreator);