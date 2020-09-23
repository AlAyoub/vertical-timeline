import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from '../../node_modules/react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import './VerticalTimeline.css';

function Vertical() {
    return (
        <div className="VerticalTimeline">
            <VerticalTimeline animate={true} layout={'2-columns'}>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(20, 220, 180)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">Kaiser Permanente</h2>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>

                    <p>
                        Full Stack Developer, Security Bug Tech Lead, Documentation
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2019 - present</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">BrainiMac</h2>
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        Creator, Start Up, Full Stack Developer, Content
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2017 - 2019</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 153, 51)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">Mac Intelligent</h2>
                    <h3 className="vertical-timeline-element-title">Owner</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        Apple Certified Macintosh Technician, Hardware, Software
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2009 - 2017</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">CSUMB</h2>
                    <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monterey Bay, CA</h4>
                    <p>
                        Earned "Biggest Social Impact Award" for BrainiMac
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2015 - 2018</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">ELAC</h2>
                    <h3 className="vertical-timeline-element-title">A.A. Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monterey Park, CA</h4>
                    <p>
                        Launched A Mentorship Website for the Adalente Program
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2015 - 2016</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title companyColor">CSUN</h2>
                    <h3 className="vertical-timeline-element-title">B.A. Communication Studies</h3>
                    <h4 className="vertical-timeline-element-subtitle">Northridge, CA</h4>
                    <p>
                        Voted The #1 Radio Show
                    </p>
                    <h4 className="vertical-timeline-element-subtitle dateColor">2001 - 2003</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />

            </VerticalTimeline>
        </div >
    )
}

export default Vertical;