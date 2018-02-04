import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import { getCountries } from '../../api';

const MIN_INSTALLS = 100;

export default class Countries extends Component {

	state = {
		countries: []
	};

	async componentWillMount() {
		const countries = await this.fetchCountries();
		this.setState(countries);
	}

	async fetchCountries() {
		const countries = (await getCountries()).reduce((acc, cur) => {
			if (cur.installs >= MIN_INSTALLS) {
				acc.push(
					<List.Item>
						<List.TextContainer>
							<List.PrimaryText>{ cur.code }</List.PrimaryText>
							<List.SecondaryText>{ cur.installs } active installs</List.SecondaryText>
						</List.TextContainer>
					</List.Item>
				);
			}
			return acc;
		}, []);
		return { countries };
	}
	render(props, { countries }) {
		return (
			<section>
				<Card>
					<Card.Primary>
						<Card.Title large>Countries</Card.Title>
						<Card.Subtitle>Minimum { MIN_INSTALLS } active installs</Card.Subtitle>
					</Card.Primary>
					<List two-line>
						{ countries }
					</List>
				</Card>
			</section>
		);
	}
}
