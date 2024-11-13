import React from 'react';
import data from "./../../../data/data";
import { FooterStyle, CopyRight } from './style'
import {ContainerLayout} from '../../common'
import github from '../../../images/github.png';
import { Link } from 'gatsby';

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<div className="box">
					<div>
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Construit avec {` `} 
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          					</span> 
							Copyright 2025 by {data.SiteAuthor} </CopyRight>
							</div>
							<div>
						<Link className="landing__policy" to="/privacy">
						Politique de confidentialité
						</Link>
						</div>
						<div className="footer-social-links">
							<a href="https://github.com/SylvainBoniou" target="_blank" rel="noopener noreferrer">
								<span className="screen-reader-text">Github</span>
								<img src={github} alt="" width={30} height={30} />
							</a>
						</div>
					</div>
				</ContainerLayout>
			</FooterStyle>

		</>
	)
}




export default Footer;
