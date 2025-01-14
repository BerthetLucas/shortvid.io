import React from 'react';
import {Composition, Folder} from 'remotion';
import {AvatarWithCaption} from './AvatarWithCaption';
import {TalkDetails} from './TalkDetails';
import {IconWithCaption} from './IconWithCaption';

export const MoleculesComposition: React.FC = () => {
	return (
		<Folder name="Molecules">
			<Composition
				id="AvatarWithCaption"
				component={AvatarWithCaption}
				width={1200}
				height={1200}
				fps={30}
				durationInFrames={120}
				defaultProps={{
					caption: 'Association Lyon.Js',
				}}
			/>
			<Composition
				component={IconWithCaption}
				width={1200}
				height={1200}
				id="IconifyWithCaption"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					caption: '19 Décembre 2023',
					iconifyId: 'mdi:calendar',
					style: {
						color: 'black',
						padding: 20,
					},
				}}
			/>
			<Composition
				component={TalkDetails}
				width={1200}
				height={1200}
				id="Details"
				fps={30}
				durationInFrames={120}
				defaultProps={{
					items: {
						date: '19 Décembre 2023',
						time: '17h30',
						location: 'Salle 1',
					},
				}}
			/>
		</Folder>
	);
};
