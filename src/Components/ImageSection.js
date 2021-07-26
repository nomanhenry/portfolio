import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Noman Henry</span></h4>
                <p className="paragraph">
                I've worked as software engineer for my entire 3-year career, and my commitment to critical thinking and attention to detail have gotten me to where I am today: a software engineer for HealthCare Technology. I have a passion for processes, and I'm an experienced team leader who typically manages projects at any given time..
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>University</p>
                        <br></br>
                        <p>Degree</p>
                        <br></br>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Noman Henry</p>
                        <p>: Capital University of Science and Technology</p>
                        <p>: Bachelor's in Software Engineering</p>
                        <p>: Pakistani </p>
                        <p>: Urdu, English </p>
                        <p>: Islamabad, Pakistan</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
