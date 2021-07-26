import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 March - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Sequel Technologies'}
                        text={'Responsible to develop client/server side coding using React + .Net Framework/ .Net Core. '} 
                    />
                    <ResumeItem 
                        year={'2020 Jan - 2021 March'} 
                        title={'API Developer'}
                        subTitle={'Medical Transcription and Billing Company. (MTBC)'}
                        text={'Responsible to develop API\'s for web and mobile application in .Net Framework/ .Net Core. '} 
                    />
                    <ResumeItem 
                        year={'2017 July - 2017 Sep'} 
                        title={'.Net Developer (Internship)'}
                        subTitle={'Eziline Software House Pvt Ltd'}
                        text={'Responsible to develop Enterprise Application in .Net Framework. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2015 - 2019'} 
                        title={'Bachelor\'s in Software Engineering'}
                        subTitle={'Capital University of Science and Technology'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2013 - 2015'} 
                        title={'Intermediate (Pre-Engineering)'}
                        subTitle={'St\'s Mary College'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2011 - 2013'} 
                        title={'Matric (Science)'}
                        subTitle={'Pakistan School Muscat, Oman'}
                        text={''} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
