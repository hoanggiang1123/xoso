import { useGlobalState } from '../state';
import { CurrentCityLive } from '../components/CurrentCityLive';

export default function Home() {
	return <div className="index-page">
		<div className="container">
			<CurrentCityLive />
		</div>
	</div>
}
