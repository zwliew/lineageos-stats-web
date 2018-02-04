import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';

export default class Models extends Component {
	render() {
		return (
			<section>
				<Card>
					<Card.Primary>
						<Card.Title large>Models</Card.Title>
					</Card.Primary>
					<List two-line>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>bacon</List.PrimaryText>
								<List.SecondaryText>69834 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>i9300</List.PrimaryText>
								<List.SecondaryText>53032 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>osprey</List.PrimaryText>
								<List.SecondaryText>37425 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
						<List.Item>
							<List.TextContainer>
								<List.PrimaryText>klte</List.PrimaryText>
								<List.SecondaryText>37414 active installs</List.SecondaryText>
							</List.TextContainer>
						</List.Item>
					</List>
				</Card>
			</section>
		);
	}
}
