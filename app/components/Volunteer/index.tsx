export function Volunteer({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<h3>Volunteers are welcome - Just Turn Up!</h3>
			{children}
			<p>
				We meet every
				<mark>
					<strong> Saturday 10am-12noon </strong>
				</mark>
				and have a break for biscuits and chatting at 11am.
			</p>
		</>
	);
}
