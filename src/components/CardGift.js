import React from 'react'

function CardGift  (props){ 
  return (
    <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
            <img className="card-img-top" src={props.images.original.url} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{props.username}</h4>
            </div>
        </div>
    </div>
  )
}
export default CardGift
