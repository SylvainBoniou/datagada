import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";


const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "54db13f1deef6bf15ce17127aa98eb33.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 550) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
           
              <SubTitle> Full Stack Engineer. </SubTitle>
              
            </div> 
            <div>
              <Title> Hello, I’m Abdelali </Title>
              <Text> Full-Stack Engineer from <b className="text-primary lined-link">Morocco</b> </Text>
              <Text>  Experienced Software Engineer Passionate about workability and learning with good technical experience Relational Database and multitude of NoSQL DBs, Java, Js, Data Structure, Algorithms. I'm seeking to learn more to get an experience and increase my knowledge stack to build stable and high scalable system with a strong information technology professional with a bachelor’s degree focused on computer science.
              </Text> 
              <Text> working with multi agencies on multi projects allowed me to better understand the expectations of clients and the needs of team members.</Text>
              <Text>  The Only Thing I Know , is that i really know Nothing at all. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
