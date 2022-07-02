import React from 'react';

function ProjectList({projects}) {
    let index = 0;
    return (
        projects.map((item) => (
          <div className='img' key={index++}>
            <img src={item.img} alt='' />
          </div>
        ))
      );
}

export default ProjectList;