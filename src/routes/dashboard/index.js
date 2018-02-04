import { h, Component } from 'preact';
import { route } from 'preact-router';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import { getTotalInstalls, getLastUpdated, getMostActiveModel, getMostActiveCountry } from '../../api';
import style from './style';

export default class Dashboard extends Component {

	state = {
		installs: 'Unknown',
		updated: 'Unknown',
		model: 'Unknown',
		country: 'Unknown'
	};

	goToModelList = () => route('/models');
	goToCountryList = () => route('/countries');

	async componentWillMount() {
		const stats = await this.fetchStats();
		this.setState(stats);
	}

	async fetchStats() {
		const stats = await Promise.all([
			getTotalInstalls(),
			getLastUpdated(),
			getMostActiveModel(),
			getMostActiveCountry()
		]);
		return {
			installs: stats[0],
			updated: stats[1],
			model: stats[2],
			country: stats[3]
		};
	}

	render(props, { installs, updated, model, country }) {
		return (
			<section id={style.dashboard}>
				<Card className={style.card}>
					<Card.Primary>
						<Card.Title large className={style.title}>{ installs }</Card.Title>
						<Card.Subtitle>Active installs</Card.Subtitle>
						<Card.Subtitle>Last updated: { updated }</Card.Subtitle>
					</Card.Primary>
				</Card>
				<Card className={style.card}>
					<Card.Primary>
						<Card.Title large className={style.title}>{ model.name }</Card.Title>
						<Card.Subtitle>Most active model</Card.Subtitle>
					</Card.Primary>
					<Card.Actions>
						<Card.Action onClick={this.goToModelList}>More</Card.Action>
					</Card.Actions>
				</Card>
				<Card className={style.card}>
					<Card.Primary>
						<Card.Title large className={style.title}>{ country.code }</Card.Title>
						<Card.Subtitle>Most active country</Card.Subtitle>
					</Card.Primary>
					<Card.Actions>
						<Card.Action onClick={this.goToCountryList}>More</Card.Action>
					</Card.Actions>
				</Card>
			</section>
		);
	}
}
