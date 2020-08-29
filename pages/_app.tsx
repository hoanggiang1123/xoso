import '../styles/globals.css';

import Head from 'next/head';
import App from "next/app";
import { AppContext, AppProps } from "next/app";

import { Header } from '../components/Header';

import { checkParams } from '../helpes';


function MyApp({ Component, pageProps }: AppProps) {

	return (
		<div id="root">
			<Head>
				<title>This is Test</title>
				<script src="/js/mmenu-light.js"></script>
			</Head> 
			<Header />
			<Component {...pageProps} />
		</div>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const query = appContext.ctx.query;
	const res = appContext.ctx.res;
	let paramsResult = null;
	if(query) {
		paramsResult = checkParams(query);
		if (paramsResult.status === false) {
			res.statusCode = 302;
			res.setHeader('Location', '/');
			return res.end();
		}
	}
	const appProps = await App.getInitialProps(appContext);
	return { 
		pageProps: {
			...appProps,
			paramsResult
		}
	};
}

export default MyApp
