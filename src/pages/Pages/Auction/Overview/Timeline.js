import React from 'react';
import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBriefcase,
//   faSchool,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <></>,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <></>,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <></>,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

function App() {
  const timeline = [
 
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Registered on',
      subtitle: 'Miami, FL',
      desc: 'Vehicle was registered in the United States of America in the state of Florida',
    },
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Imported On',
      subtitle: 'Tema, Ghana',
      desc: 'Vehicle was brought from the United States to Ghana by the owner of the vehicle',
    },
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Sold to Customer',
      subtitle: 'Osu, Accra',
      desc: 'This is the current status of the vehicle and the individual who currently owns this vehicle',
    },
  
  ];

  return (
    <div  style={{backgroundColor: '#00d084', borderRadius: '10px'}} className='mb-4'>
     <div className="p-3">
     <h5 className='text-dark'>
       Vehicle Timeline
      </h5>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'black', color: '#fff' }
              : { background: 'black', color: '#fff' };
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid  black' }
              : { borderRight: '7px solid  black' };

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h5 className="vertical-timeline-element-title" >{t.title}</h5>
                  {t.subtitle && (
                    <p className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </p>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
     </div>
    </div>
  );
}

export default App;
