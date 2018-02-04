import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';

export default class Countries extends Component {
	render() {
		return (
			<section>
				<Card>
					<Card.Primary>
						<Card.Title large>Countries</Card.Title>
					</Card.Primary>
					<List two-line>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>in</List.PrimaryText>
								<List.SecondaryText>115684 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>br</List.PrimaryText>
								<List.SecondaryText>77175 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>cn</List.PrimaryText>
								<List.SecondaryText>73931 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>de</List.PrimaryText>
								<List.SecondaryText>65183 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
					</List>
				</Card>
			</section>
		);
	}
}
