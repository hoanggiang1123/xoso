import { useGlobalState } from '../state';
import { WeekDay } from '../components/WeekDay';

export default function Home() {
	return <div className="index-page">
		<div className="container">
			<WeekDay />
		</div>
	</div>
}
