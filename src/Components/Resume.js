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
                        text={' * Work as Front-End and Back-End Developer for Electronic Data Interchange, Electronic Health Records, Electronic Project Management and Active Reporting Tool Products using ReactJS, .Net/Core, ActiveReportJS ETC. * Integrate Code and share between teams on Azure DevOps. * Deploy Code on Azure App Services. '} 
                    />
                    <ResumeItem 
                        year={'2020 Jan - 2021 March'} 
                        title={'API Developer'}
                        subTitle={'Medical Transcription and Billing Company. (MTBC)'}
                        text={'Work as API Developer for WEB (talkEHR, talkPHR, webEHR ETC) and MOBILE (talkCheckIN, iRX ETC) Products and Develop Smart Searches API for these products to enhance search performance using Apache SOLR, .Net/Core. * Integrate Code and share between team using TFS. * Deploy API on IIS Server. '} 
                    />
                    <ResumeItem 
                        year={'2017 July - 2017 Sep'} 
                        title={'.Net Developer (Internship)'}
                        subTitle={'Eziline Software House Pvt Ltd'}
                        text={'Work as .Net Back-End Developer for Managemnet System to develop using .Net Framework. '} 
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
