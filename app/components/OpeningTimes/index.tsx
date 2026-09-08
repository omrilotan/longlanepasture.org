import { season } from "../../../lib/helpers/season";

export function OpeningTimes() {
	const winter = [
		"🌧",
		"November-March",
		"Coordinate with volunteers for access",
	];
	const summer = ["☀️", "April-October", "Every Day: 9am-7pm or dusk"];
	const volunteering = ["📅", "All Year", "Saturday volunteering: 10am-12noon"];
	const lines = season.winter
		? [winter, summer, volunteering]
		: [summer, winter, volunteering];
	return (
		<>
			<h3>
				Opening Times <sub>† unless too wet</sub>
			</h3>
			{/* Scroll container: a table cannot shrink below its min-content
			    width, which overflows narrow viewports (WCAG 1.4.10/1.4.12) */}
			<div className="table-scroll">
				<table className="data">
					{/* The table's accessible name; the visible <h3> above says the
					    same thing, so it is not repeated on screen. */}
					<caption className="visually-hidden">
						Opening times at Long Lane Pasture
					</caption>
					<tbody>
						{lines.map(([icon, title, hours]) => (
							<tr key={title}>
								{/* Decorative: it repeats the period named beside it */}
								<td aria-hidden="true">{icon}</td>
								<th scope="row">{title}</th>
								<td>{hours}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{season.winter ? (
				<p className="highlight">
					Winter is a time for the pasture to recover and regenerate, allowing
					us to carry out essential maintenance like clearing brambles,
					pollarding trees, and restoring ponds. To coordinate visits during
					this period, please get in touch with our volunteers.
				</p>
			) : (
				<p className="highlight">
					Opening times depend on volunteer availability. While we aim to open
					during scheduled hours, we cannot always guarantee it.
				</p>
			)}
		</>
	);
}
