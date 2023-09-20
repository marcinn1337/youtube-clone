export default function ChannelLink({ title, link }) {
	return (
		<div>
			<p>{title}</p>
			<a href={link}>{link}</a>
		</div>
	)
}
