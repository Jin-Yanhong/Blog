import { Component } from 'react';
import { dictValue, work } from '../../types';
import { fieldTranslate } from '../../utils/index';

import './index.scss';

type WorkItemProps = {
    item: work;
    tagList: Array<dictValue>;
    techList: Array<dictValue>;
};

export default class WorkItem extends Component<WorkItemProps, WorkItemProps> {
    constructor(props: WorkItemProps) {
        super(props);
    }
    fieldTranslate = () => fieldTranslate;
    render() {
        let { item, tagList, techList } = this.props;

        return (
            <div>
                <div className="workItem shadow-sm">
                    <div className="image" style={{ backgroundImage: `url(${item.screenShortUrl})` }}></div>
                    <p className="name">{item.name}</p>
                    <p className="classIfy">
                        分类 :
                        {item.tag?.map((tag, index) => {
                            return (
                                <span key={index} className="techItem">
                                    &nbsp;
                                    {fieldTranslate(tagList, tag, 'value', 'label')}
                                </span>
                            );
                        })}
                    </p>
                    <p className="tech">
                        <span>技术栈 : </span>
                        {item.technology?.map((tech, index) => {
                            return (
                                <span key={index} className="techItem">
                                    {fieldTranslate(techList, tech, 'value', 'label')}
                                </span>
                            );
                        })}
                    </p>
                    <div className="desc">{item.desc}</div>
                </div>
            </div>
        );
    }
}
