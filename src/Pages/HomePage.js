import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Noman Henry</span></h1>
                <p>
                    I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my three years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer for multiple projects with HealthCare Technology.
                    
                </p>
                {/* <div className="icons">
                    <a href="https://codepen.io/pen/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div> */}
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
