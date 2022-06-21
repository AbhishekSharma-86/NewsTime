import React from 'react'

const Newsitem = (props)=>{
      let {title, newsUrl, description, imageUrl} = props;  
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={imageUrl} alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}.</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
export default Newsitem
