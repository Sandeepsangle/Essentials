import React from 'react'

const MenuCard = ({menuData}) => {
  return (
      <>
      <section className="main-card--container">
        {menuData.map((curElem)=>{
            return (
                <>
                <div className='card-container'>
                <div className="card">
                  <div className="card-body">
                      <span className='card-number card-circle subtle'>{curElem.id}</span>
                      <span className='card-author subtle'>{curElem.name}</span>
                      <h2 className='card-title'>{curElem.category}</h2>
                      <span className='card-description subtle'>
                        {curElem.description}
                      </span>
                      <div className='card-read'>{curElem.quantity}</div>
                  </div>
                  <img src={curElem.image} alt="images" className='card-media' srcset="" />
                  <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
                </>
            );
        })}
        </section>
        </>
  );
};

export default MenuCard