import React, { useState } from 'react';
import ProjectList from '../ProjectList';
import Toolbar from './Toolbar';

function Portfolio({projectList}) {
    const filterList = ["All", "Websites", "Flayers", "Business Cards"];
    
    const [filterListProject, setFilterListProject] = useState(projectList);
    const [selected, setSelected] = useState("All");
    
    const filter = (e) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((item) => item.classList.remove('active'));
        e.target.classList.add('active');
        const select = e.target.textContent;
        if (select === "All") {
            setFilterListProject(projectList);
            
        } else {
            setFilterListProject (
                projectList.filter(item => item.category === select)
            );
        }

        setSelected(select);
        

    }
  return (
    <div className="container">
        <Toolbar
            filters={filterList}
            selected={selected}
            onSelectFilter={filter}
        />
        <div className="gallery">
            <ProjectList projects={filterListProject} />
        </div>
    </div>
  );
}


export default Portfolio;
