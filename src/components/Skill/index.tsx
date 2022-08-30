import React, { useEffect, useState } from 'react';
import { getSkillsList } from '../../api/home';
import { skill } from '../../types';
import { getStorage, setStorage } from '../../utils';
import './index.scss';

interface skillProps {
	[key: string]: any;
}
const Skill: React.FunctionComponent<skillProps> = function (props: skillProps) {
	let [skills, setSkills] = useState([]);

	let skillsObj: any = getStorage('skills') || undefined;

	useEffect(() => {
		if (skillsObj) {
			setSkills(skillsObj);
		} else {
			getSkillsList()
				.then((res) => {
					setSkills(res);
					setStorage('skills', res);
				})
				.catch((err) => {});
		}

		return () => {
			// window.localStorage.clear();
		};
	}, []);
	return (
		<div className="container">
			<div className="row">
				{skills?.map((el: skill) => {
					return (
						<div key={el._id} className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-3">
							<div className="skillItem flex flex-between" style={{ color: el.color }}>
								<span className="name">{el.name}</span>
								<div className="container" style={{ borderColor: el.color }}>
									<span
										className="bar"
										style={{ backgroundColor: el.color, width: el.score + '%' }}
									></span>
								</div>
								<span className="score">{el.score}%</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skill;
