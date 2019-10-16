import Router from 'next/router';

export default function redirect(link: string, ctx?: any): void {
		Router.push(link)
}
