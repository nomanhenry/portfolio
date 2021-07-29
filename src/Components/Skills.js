import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Mongo DB'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'MS-SQL DB'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Express JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                         <ProgressBar 
                            title={'FireBase'}
                            width={'85%'}
                            text={'85%'}
                        />
                          <ProgressBar 
                            title={'ActiveReport JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                          <ProgressBar 
                            title={'Apache SOLR'}
                            width={'90%'}
                            text={'90%'}
                        />
                           <ProgressBar 
                            title={'C#'}
                            width={'90%'}
                            text={'90%'}
                        />
                           <ProgressBar 
                            title={'.Net/.NetCore'}
                            width={'90%'}
                            text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
