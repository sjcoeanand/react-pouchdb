import React from 'react';
import {Row, Col, Container, Card, CardBody } from 'reactstrap';
import { isEmpty, find } from 'lodash';
import DB from '../db';

export default class ShowSections extends React.Component {
	constructor(){
		super();    
		this.state = {
				db : {},
				section : {}
		}   
	}

	componentDidMount = async() => {

		const dbCon = new DB(),
				result = await dbCon.getAllChapters(),
				{ match } = this.props,
				chapter = result[match.params.chapter_id],
				section = await find(chapter.sections, {section_id:this.props.match.params.id});
				this.setState({section})
	}

	render() {
		const {section} = this.state;
		console.log("====sections======>", section);
		return(!isEmpty(section) &&
		<Container>
			<Row>
				<Col sm={12} className="section-details">
					<Card>
						<CardBody>
							<p>{section.section_name}</p>
							<p>{section.section_body}</p>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
		)
	}
}