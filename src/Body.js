import React from 'react';
import Offers from './Offers';
import './Body.css'


function Body() {
  return (
    <div className='body'>
        <div className='title'>

          <h3>New Offers</h3>
        
        </div>

      <div className='body__offers'>

        <Offers image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        name={'snekers'} description={'Commodo nulla dolor sit sit incididunt ipsum elit cupidatat anim cupidatat dolore voluptate adipisicing nulla.'}
        price={'200$'} 
        />
        <Offers image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        name={'snekers'} />
        <Offers image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        name={'snekers'} />
        <Offers image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        name={'snekers'} />
        <Offers image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        name={'snekers'} />

      </div>

      <div className='title'>

        <h3>Pick of the week</h3>

      </div>

      <div className='body__offers week__pick'>

      </div>

      <div className='title'>

        <h3>Categories</h3>

      </div>

      <div className='body__offers categories'>

      </div>

    </div>
  )
}

export default Body
