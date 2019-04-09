import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

const EventDashboard = () => (
	<Grid>
		<Grid.Row columns={2}>
			<Grid.Column width={10}>
				<h2>Left</h2>
			</Grid.Column>
			<Grid.Column width={6}>
				<h2>Right</h2>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default EventDashboard;
