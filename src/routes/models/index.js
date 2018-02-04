import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import List from 'preact-material-components/List';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/List/style.css';
import { getModels } from '../../api';

const MIN_INSTALLS = 100;

export default class Models extends Component {

	state = {
		models: []
	};

	async componentWillMount() {
		const models = await this.fetchModels();
		this.setState(models);
	}

	async fetchModels() {
		const models = (await getModels()).reduce((acc, cur) => {
			if (cur.installs >= MIN_INSTALLS) {
				acc.push(
					<List.Item>
						<List.TextContainer>
							<List.PrimaryText>{ cur.name }</List.PrimaryText>
							<List.SecondaryText>{ cur.installs } active installs</List.SecondaryText>
						</List.TextContainer>
					</List.Item>
				);
			}
			return acc;
		}, []);
		return { models };
	}

	render(props, { models }) {
		return (
			<section>
				<Card>
					<Card.Primary>
						<Card.Title large>Models</Card.Title>
						<Card.Subtitle>Minimum { MIN_INSTALLS } active installs</Card.Subtitle>
					</Card.Primary>
					<List two-line>
						{ models }
					</List>
				</Card>
			</section>
		);
	}
}
