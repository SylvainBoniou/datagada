import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, graphql } from "gatsby"
import {Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text} from "../components/common"

const WorkIndex = ({  }) => {
 

  return (
    <>
      <Layout> 
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>

            <SubTitle className="text-dark">
              Selected Work
            </SubTitle>

            <ContainerLayout className="wrapper">
    
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

