import * as React from "react";
import Layout from "../components/layout";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from '../components/layout/footer/style'
import socialMedia from "../data/socialMedia.json";
import {ContainerLayout, ButtonDefault} from '../components/common'
import data from "./../data/data";

const AboutPage = () => {
  return (

      	<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Une demande, un idée, une remarque, me payer une bière ? </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contacter moi </ButtonDefault>
						</div>
					</FooterBody>

  )
}

export const Head = () => <title>About Me</title>

export default AboutPage